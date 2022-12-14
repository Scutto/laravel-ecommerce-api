<?php

namespace Modules\Stripe\Console;

use Illuminate\Console\Command;
use Laravel\Cashier\Cashier;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductSizeQuantity;
use Modules\Product\Entities\ProductImage;

class UpdateProducts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $name = 'stripe:update_products';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Updates all products from stripe data';

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
        $stripeProducts = Cashier::stripe()->products->all();
        foreach ($stripeProducts as $stripeProduct) {
            if (Product::where('stripe_product_id', $stripeProduct['id'])->exists()) {
                $product = Product::where('stripe_product_id', $stripeProduct['id'])->firstOrFail();
                $product->title = $stripeProduct['name'];
                $product->description = $stripeProduct['description'];
                $product->save();
            } else {
                $newProduct = new Product();
                $newProduct->title = $stripeProduct['name'];
                $newProduct->description = $stripeProduct['description'];
                $newProduct->stripe_product_id = $stripeProduct['id'];
                $newProduct->stripe_product_price_id = null;
                $newProduct->category_id = 1;
                $newProduct->price = 0;
                $newProduct->save();
                $newProduct->refresh();

                foreach(['xs', 's', 'm', 'l', 'xl', 'xxl'] as $size) {
                    $newProductSizeQuantity = new ProductSizeQuantity();
                    $newProductSizeQuantity->product_id = $newProduct->id;
                    $newProductSizeQuantity->size = $size;
                    $newProductSizeQuantity->quantity = 5;
                    $newProductSizeQuantity->save();
                }

                $newImage = new ProductImage();
                $newImage->product_id = $newProduct->id;
                $newImage->file = '1.jpg';
                $newImage->type = 'thumbnail';
                $newImage->save();

                foreach(range(1, 3) as $index) {
                    $newImage = new ProductImage();
                    $newImage->product_id = $newProduct->id;
                    $newImage->file = $index . '.jpg';
                    $newImage->type = 'details';
                    $newImage->save();
                }
            }
        }
    }
}
