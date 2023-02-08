<?php

namespace Modules\Category\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Category\Entities\Category;

class CategoryDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::unguard();

        foreach(config('category.migrations.mtb', []) as $category) {
            $newCategory = new Category();
            $newCategory->name = $category;
            $newCategory->type = 'mtb';
            $newCategory->save();
        }

        foreach(config('category.migrations.streetwear', []) as $category) {
            $newCategory = new Category();
            $newCategory->name = $category;
            $newCategory->type = 'streetwear';
            $newCategory->save();
        }

        Category::reguard();
    }
}
