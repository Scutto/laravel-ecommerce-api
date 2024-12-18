<?php

namespace Modules\PayPal\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Modules\Order\Entities\Order;
use Modules\Order\Entities\OrderProduct;
use Modules\ShoppingCart\Entities\ShoppingCartProduct;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewOrderAlert;
use App\Mail\OwnerOrderAlert;
use Illuminate\Support\Facades\Log;
use Modules\ShoppingCart\Entities\ShoppingCart;
use Modules\Order\Processors\GetShippingCostProcessor;
use Modules\Order\Processors\GetSubAndTotalAmountForOrderProcessor;
use Modules\Order\Processors\ManageInvoiceForOrderProcessor;
use Modules\Order\Processors\ReduceProductQuantityFromOrderProcessor;
use Throwable;

class PayPalController extends Controller
{
    /**
     * Adds a new order from paypal
     */
    public function postOrderData(Request $request)
    {
        try {
            $data = $request->get('data');
            $sessionId = $request->get('sessionId');
            $shoppingCart = ShoppingCart::with(['appliedCoupon'])->where('session_id', $sessionId)->firstOrFail();

            $processorShipping = resolve(GetShippingCostProcessor::class);
            $processorAmount = resolve(GetSubAndTotalAmountForOrderProcessor::class);

            $lastOrderNumber = Order::whereNotNull('order_number')->orderBy('order_number', 'desc')->first();
            
            if($lastOrderNumber === null) {
                $orderNumber = 1;
            } else {
                $orderNumber = $lastOrderNumber->order_number + 1;
            }

            $order = Order::with(['coupon', 'products'])->where('session_id', $sessionId)->firstOrFail();
            $order->gateway = 'paypal';
            $order->gateway_id = $data['id'];
            $order->order_number = $orderNumber;
            $order->status = 'payed';
            $order->coupon_stripe_id = $shoppingCart->appliedCoupon != null ? $shoppingCart->appliedCoupon->coupon_stripe_id : null;
            $order->gateway_payload = json_encode($data);
            $order->save();
            $order->refresh();
            
            $shoppingCart->products->each(
                function(ShoppingCartProduct $product) use($order) {
                    OrderProduct::updateOrCreate(
                        [
                            'order_id' => $order->id,
                            'product_id' => $product->product->id,
                            'size' => $product->size,
                        ],
                        [
                            'quantity' => $product->quantity
                        ]
                    );
                }
            );
            $order->refresh();

            $order->shipping_cost = $processorShipping->getShippingCost($order, $processorAmount->getOrderTotalAmount($order, false));
            $order->amount_total = $processorAmount->getOrderTotalAmount($order);
            $order->save();
            $order->refresh();

            $shoppingCart->delete();

            $classProcessor = resolve(ReduceProductQuantityFromOrderProcessor::class);
            $classProcessor->reduceProductQuantity($order);

            $classProcessorInvoice = resolve(ManageInvoiceForOrderProcessor::class);
            $invoiceId = $classProcessorInvoice->create($order);
            // $resultVerification = $classProcessorInvoice->verifyInvoiceXML($invoiceId);

            $subTotale = $processorAmount->getOrderSubTotalAmount($order);
            $toSubtract = null;
            if($order->coupon != null) {
                if($order->coupon->type === 'fixed') {
                    $toSubtract = number_format($order->coupon->amount_off, 2);
                } else if($order->coupon->type === 'percentage') {
                    $toSubtract = number_format($order->coupon->amount_off * 100, 2) . '%';
                }
            }

            Mail::to($order->customer_email)->send(new NewOrderAlert($order, $toSubtract, $subTotale));
            Mail::to(config('app.mail_owner'))->send(new OwnerOrderAlert($order));

            return response()->json([
                'order' => $order,
            ]);
        } catch (Throwable $e) {
            Log::error(json_encode($request->get('data')));
            return response([
                'debug' => [$e->getMessage(), $e->getFile(), $e->getLine()],
                'message' => [
                    'title' => 'general.api.error.title',
                    'text' => 'general.api.error.text',
                ],
            ], 400);
        }
    }
}
