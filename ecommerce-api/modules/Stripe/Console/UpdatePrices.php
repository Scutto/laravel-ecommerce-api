<?php

namespace Modules\Stripe\Console;

use Illuminate\Console\Command;
use Laravel\Cashier\Cashier;
use Modules\Product\Entities\Product;

class UpdatePrices extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $name = 'stripe:update_prices';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update all the prices from stripe';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $stripePrices = Cashier::stripe()->prices->all();
        foreach($stripePrices as $stripePrice) {
            $productId = $stripePrice['product'];
            if (Product::where('stripe_product_id', $productId)->exists()) {
                $product = Product::where('stripe_product_id', $productId)->firstOrFail();
                $product->stripe_product_price_id = $stripePrice['id'];
                $product->price = $stripePrice['unit_amount'];
                $product->save();
            }
        }
    }
}
