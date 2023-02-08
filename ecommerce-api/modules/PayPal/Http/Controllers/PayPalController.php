<?php

namespace Modules\PayPal\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Modules\Order\Entities\Order;
use Modules\Order\Entities\OrderProduct;
use Modules\ShoppingCart\Entities\ShoppingCartProduct;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewOrderAlert;
use Illuminate\Support\Facades\Log;
use Modules\ShoppingCart\Entities\ShoppingCart;
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

            $order = Order::where('session_id', $sessionId)->firstOrFail();
            $order->gateway = 'paypal';
            $order->gateway_id = $data['id'];
            $order->status = 'payed';
            $order->amount_total = 1000; //get from shopping cart
            $order->shipping_cost = 10;
            $order->coupon_stripe_id = $shoppingCart->applied_coupon != null ? $shoppingCart->applied_coupon->coupon_stripe_id : null;
            $order->gateway_payload = json_encode($data);
            $order->save();
            $order->refresh();

            $shoppingCart->products->each(
                function(ShoppingCartProduct $product) use($order) {
                    $orderProduct = new OrderProduct();
                    $orderProduct->order_id = $order->id;
                    $orderProduct->product_id = $product->product->id;
                    $orderProduct->size = $product->size;
                    $orderProduct->quantity = $product->quantity;
                    $orderProduct->save();
                }
            );

            $shoppingCart->delete();

            //mail to owner
            Mail::to('gabriele.francescutto@gmail.com')->send(new NewOrderAlert());

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
