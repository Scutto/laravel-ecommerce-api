<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            
            $table->integer('order_number');
            $table->string('session_id');
            $table->string('status');
            $table->enum('gateway', ['stripe', 'paypal'])->nullable();
            $table->string('gateway_id')->nullable();
            $table->float('amount_total');
            $table->float('shipping_cost');
            $table->string('coupon_stripe_id')->nullable();
            $table->string('customer_email');
            $table->string('customer_firstname');
            $table->string('customer_lastname');
            $table->string('address_street_1');
            $table->string('address_street_2')->nullable();
            $table->string('address_city');
            $table->string('address_zipcode');
            $table->string('address_region')->nullable();

            $table->text('gateway_payload');
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
        Schema::dropIfExists('orders');
    }
}
