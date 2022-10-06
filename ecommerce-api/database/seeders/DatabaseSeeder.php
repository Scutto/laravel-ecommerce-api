<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Category\Database\Seeders\CategoryDatabaseSeeder;
use Modules\Product\Database\Seeders\ProductDatabaseSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategoryDatabaseSeeder::class);
        $this->call(ProductDatabaseSeeder::class);
    }
}
