<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::name('shopping_cart.')->prefix('shopping_cart')->group(function () {
    Route::get('get/{sessionId}', 'ShoppingCartController@getShoppingCartBySessionId')->name('get.shopping_cart');
    Route::post('checkout', 'ShoppingCartController@checkout')->name('get.checkout');

    Route::post('post/set_coupon', 'ShoppingCartController@postApplyCoupon')->name('post.add_coupon');
    Route::post('post/add_product', 'ShoppingCartController@postAddProductToShoppingCart')->name('post.add_product');
    Route::post('post/remove_product', 'ShoppingCartController@postRemoveProductToShoppingCart')->name('post.remove_product');
    Route::post('post/update_products', 'ShoppingCartController@postUpdateProductsToShoppingCart')->name('post.update_product');
});
