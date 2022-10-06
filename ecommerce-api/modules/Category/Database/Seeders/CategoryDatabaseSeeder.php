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

        foreach(config('category.migrations.categories', []) as $category) {
            $newCategory = new Category();
            $newCategory->name = $category;
            $newCategory->save();
        }

        Category::reguard();
    }
}
