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
            $table->text('customer_email');
            $table->text('customer_firstname');
            $table->text('customer_lastname');
            $table->text('address_street_1');
            $table->text('address_street_2')->nullable();
            $table->text('address_city');
            $table->text('address_zipcode');
            $table->text('address_region')->nullable();

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
