<?php

namespace Modules\Stripe\Listeners;

use Illuminate\Support\Facades\Log;
use Laravel\Cashier\Events\WebhookReceived;
use Modules\Order\Entities\OrderProduct;
use Modules\ShoppingCart\Entities\ShoppingCartProduct;
use Modules\Order\Entities\Order;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewOrderAlert;
use App\Mail\OwnerOrderAlert;
use Modules\Order\Processors\GetShippingCostProcessor;
use Modules\Order\Processors\GetSubAndTotalAmountForOrderProcessor;
use Modules\Order\Processors\ManageInvoiceForOrderProcessor;
use Modules\Order\Processors\ReduceProductQuantityFromOrderProcessor;
use Throwable;

class StripeEventListener
{
    /**
     * Handle received Stripe webhooks.
     *
     * @param  \Laravel\Cashier\Events\WebhookReceived  $event
     * @return void
     */
    public function handle(WebhookReceived $event)
    {
        Log::error($event->payload['type']);
        Log::error(json_encode($event));

        $webHookType = $event->payload['type'];
        // if ($webHookType === 'product.created') {
        //     $newProduct = new Product();
        //     $newProduct->title = $event->payload['data']['object']['name'];
        //     $newProduct->description = $event->payload['data']['object']['description'];
        //     $newProduct->stripe_product_id = $event->payload['data']['object']['id'];
        //     $newProduct->stripe_product_price_id = null;
        //     $newProduct->category_id = 1;
        //     $newProduct->price = 0;
        //     $newProduct->available_sizes = 's';
        //     $newProduct->available_quantity = 0;
        //     $newProduct->save();
        // }

        // if($webHookType === 'price.created') {
        //     $productId = $event->payload['data']['object']['product'];
        //     $product = Product::where('stripe_product_id', $productId)->firstOrFail();
        //     $product->stripe_product_price_id = $event->payload['data']['object']['id'];
        //     $product->price = $event->payload['data']['object']['unit_amount'];
        //     $product->save();
        // }

        if($webHookType === 'checkout.session.completed') {
            //todo: use try&catch and in case of error log the $event->payload object so not to lose it
            Log::info($event->payload);
            try{
                $order = Order::with(['shoppingCart', 'products'])->where('gateway', 'stripe')
                    ->where('gateway_id', $event->payload['data']['object']['id'])
                    ->firstOrFail();

                $processorShipping = resolve(GetShippingCostProcessor::class);
                $processorAmount = resolve(GetSubAndTotalAmountForOrderProcessor::class);

                $lastOrderNumber = Order::whereNotNull('order_number')->orderBy('order_number', 'desc')->first();
                if($lastOrderNumber === null) {
                    $orderNumber = 1;
                } else {
                    $orderNumber = $lastOrderNumber->order_number + 1;
                }
                
                $order->amount_total = $event->payload['data']['object']['amount_total'];
                $order->status = 'payed';
                $order->order_number = $orderNumber;
                $order->coupon_stripe_id = $order->shoppingCart->appliedCoupon != null ? $order->shoppingCart->appliedCoupon->coupon_stripe_id : null;
                $order->gateway_payload = json_encode($event->payload);
                $order->save();
                $order->refresh();

                $order->shoppingCart->products->each(
                    function(ShoppingCartProduct $product) use($order) {
                        $orderProduct = new OrderProduct();
                        $orderProduct->order_id = $order->id;
                        $orderProduct->product_id = $product->product->id;
                        $orderProduct->size = $product->size;
                        $orderProduct->quantity = $product->quantity;
                        $orderProduct->save();
                    }
                );
                $order->refresh();

                $order->shipping_cost = $processorShipping->getShippingCost($order, $processorAmount->getOrderTotalAmount($order, false));
                $order->amount_total = $processorAmount->getOrderTotalAmount($order);
                $order->save();
                $order->refresh();

                $order->shoppingCart->delete();

                $classProcessor = resolve(ReduceProductQuantityFromOrderProcessor::class);
                $classProcessor->reduceProductQuantity($order);

                $classProcessorInvoice = resolve(ManageInvoiceForOrderProcessor::class);
                $invoiceId = $classProcessorInvoice->create($order);
                // $resultVerification = $classProcessorInvoice->verifyInvoiceXML($invoiceId);
                $subTotale = $processorAmount->getOrderSubTotalAmount($order);
                $toSubtract = null;
                if($order->coupon != null) {
                    if($order->coupon->type === 'fixed') {
                        $toSubtract = $order->coupon->amount_off;
                    } else if($order->coupon->type === 'percentage') {
                        $$toSubtract = $subTotale * $order->coupon->amount_off;
                    }
                }
    
                Mail::to($order->customer_email)->send(new NewOrderAlert($order, $toSubtract, $subTotale));
                Mail::to(config('app.mail_owner'))->send(new OwnerOrderAlert($order, $toSubtract));
            } catch(Throwable $t) {
                Log::info($t->getMessage());
                Log::info($t->getFile());
                Log::info($t->getLine());
                Log::info($event->payload);
            }
        }
    }
}