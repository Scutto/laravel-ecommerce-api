<?php

namespace Modules\Stripe\Listeners;

use Illuminate\Support\Facades\Log;
use Laravel\Cashier\Events\WebhookReceived;
use Modules\Order\Entities\OrderProduct;
use Modules\ShoppingCart\Entities\ShoppingCartProduct;
use Modules\Product\Entities\Product;
use Modules\Order\Entities\Order;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewOrderAlert;
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
                $order = Order::with(['shoppingCart'])->where('gateway', 'stripe')
                    ->where('gateway_id', $event->payload['data']['object']['id'])
                    ->firstOrFail();
                
                $order->amount_total = $event->payload['data']['object']['amount_total'];
                $order->status = 'payed';
                $order->amount_total = 1000; //get from shopping cart
                $order->shipping_cost = 10;
                $order->coupon_stripe_id = $order->shoppingCart->applied_coupon != null ? $order->shoppingCart->applied_coupon->coupon_stripe_id : null;
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

                $order->shoppingCart->delete();    
    
                //mail to owner
                // Mail::to('gabriele.francescutto@gmail.com')->send(new NewOrderAlert());
            } catch(Throwable $t) {
                Log::info($t->getMessage());
                Log::info($event->payload);
            }
        }
    }
}