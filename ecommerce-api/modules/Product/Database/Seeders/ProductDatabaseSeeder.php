<?php

namespace Modules\Product\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Category\Entities\Category;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductImage;

class ProductDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::unguard();

        foreach(range(1,5) as $product) {
            $newProduct = new Product();
            $newProduct->title = 'Product' . $product;
            $newProduct->description = 'Description product ' . $product;
            $newProduct->category_id = Category::inRandomOrder()->first()->id;
            $newProduct->available_sizes = 's,m,l,xl';
            $newProduct->available_quantity = 10;
            $newProduct->price = 15.55;
            $newProduct->save();
        }

        Product::all()->each(
            function(Product $product) {
                $newImage = new ProductImage();
                $newImage->product_id = $product->id;
                $newImage->file = $product->id . '.jpg';
                $newImage->type = 'thumbnail';
                $newImage->save();

                foreach(range(1, 3) as $index) {
                    $newImage = new ProductImage();
                    $newImage->product_id = $product->id;
                    $newImage->file = $index . '.jpg';
                    $newImage->type = 'details';
                    $newImage->save();
                }
            }
        );

        Product::reguard();
    }
}
