<?php

namespace Modules\Product\Console;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Modules\Product\Entities\ProductImage;
use Modules\Product\Entities\Product;

class LoadProductImagesInFolder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $name = 'product:load_images_from_folder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Checks for images in the right folder for each product and loads the missing images';

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
        Product::all()->each(
            function(Product $product) {
                $allFoundImages = Storage::disk('public')->allFiles('products/images/' . strtolower($product->title));
                foreach($allFoundImages as $imageFound) {
                    if(str_contains($imageFound, '.jpg')) {
                        $exploded = explode('/', $imageFound);
                        $fileName = end($exploded);

                        $newImage = new ProductImage();
                        $newImage->product_id = $product->id;
                        $newImage->file = $fileName;
                        $newImage->type = 'details';
                        $newImage->save();

                        if(str_contains($imageFound, '1')) {
                            $newImage = new ProductImage();
                            $newImage->product_id = $product->id;
                            $newImage->file = $fileName;
                            $newImage->type = 'thumbnail';
                            $newImage->save();
                        }
                    }
                }
            }
        );
    }
}
