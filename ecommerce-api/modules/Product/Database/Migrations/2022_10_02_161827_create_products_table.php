<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('sku')->nullable()->unique();
            $table->string('title');
            $table->string('description');
            $table->string('stripe_product_id')->nullable();
            $table->string('stripe_product_price_id')->nullable();
            $table->string('type')->default('tecnico');
            $table->integer('order_by')->nullable();
            $table->string('gender_type')->default('unisex');
            $table->bigInteger('category_id')->unsigned();
            $table->foreign('category_id')
            ->references('id')
            ->on('categories')
            ->onDelete('cascade');
            $table->unsignedInteger('price');
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
        Schema::dropIfExists('products');
    }
}
