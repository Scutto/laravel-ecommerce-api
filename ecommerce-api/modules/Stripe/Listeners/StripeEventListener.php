<?php

namespace Modules\Stripe\Listeners;

use Illuminate\Support\Facades\Log;
use Laravel\Cashier\Events\WebhookReceived;
use Modules\Product\Entities\Product;
use Modules\Order\Entities\Order;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewOrderAlert;

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
        if ($webHookType === 'product.created') {
            $newProduct = new Product();
            $newProduct->title = $event->payload['data']['object']['name'];
            $newProduct->description = $event->payload['data']['object']['description'];
            $newProduct->stripe_product_id = $event->payload['data']['object']['id'];
            $newProduct->stripe_product_price_id = null;
            $newProduct->category_id = 1;
            $newProduct->price = 0;
            $newProduct->available_sizes = 's';
            $newProduct->available_quantity = 0;
            $newProduct->save();
        }

        if($webHookType === 'price.created') {
            $productId = $event->payload['data']['object']['product'];
            $product = Product::where('stripe_product_id', $productId)->firstOrFail();
            $product->stripe_product_price_id = $event->payload['data']['object']['id'];
            $product->price = $event->payload['data']['object']['unit_amount'];
            $product->save();
        }

        if($webHookType === 'checkout.session.completed') {
            $lastOrderNumber = Order::orderBy('order_number')->first();
            
            if($lastOrderNumber === null) {
                $orderNumber = 1;
            } else {
                $orderNumber = $lastOrderNumber->order_number + 1;
            }

            $newOrder = new Order();
            $newOrder->order_number = $orderNumber;
            $newOrder->stripe_session_id = $event->payload['data']['object']['id'];
            $newOrder->amount_total = $event->payload['data']['object']['amount_total'];
            $newOrder->customer_email = $event->payload['data']['object']['customer_details']['email'];
            $newOrder->customer_name = $event->payload['data']['object']['customer_details']['name'];
            $newOrder->stripe_payload = json_encode($event->payload);
            $newOrder->save();


            Mail::to('gabriele.francescutto@gmail.com')->send(new NewOrderAlert());
        }
    }
}