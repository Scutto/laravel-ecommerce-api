<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShoppingCartProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shopping_cart_products', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('shopping_cart_id')->unsigned();
            $table->foreign('shopping_cart_id')
                ->references('id')
                ->on('shopping_carts')
                ->onDelete('cascade');

            $table->bigInteger('product_id')->unsigned();
            $table->foreign('product_id')
                ->references('id')
                ->on('products')
                ->onDelete('cascade');

            $table->string('size');
            $table->integer('quantity');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shopping_cart_products');
    }
}
