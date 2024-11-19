<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("ALTER TABLE product_size_quantities MODIFY COLUMN size ENUM('xs', 's', 'm', 'l', 'xl', 'xxl', 'single')");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("ALTER TABLE product_size_quantities MODIFY COLUMN size ENUM('xs', 's', 'm', 'l', 'xl', 'xxl')");
    }
};
