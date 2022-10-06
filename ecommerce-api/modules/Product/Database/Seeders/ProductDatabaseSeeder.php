<?php

namespace Modules\Product\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\Category\Entities\Category;
use Modules\Product\Entities\Product;

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
            $newProduct->available_sizes = 'm,l,xl';
            $newProduct->price = 15.55;
            $newProduct->image_url = 'product' . $product;
            $newProduct->save();
        }

        Product::reguard();
    }
}
