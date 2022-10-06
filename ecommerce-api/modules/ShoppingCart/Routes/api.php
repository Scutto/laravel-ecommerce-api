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

Route::middleware('auth:api')->name('shopping_cart.')->prefix('shopping_cart')->group(function () {
    Route::get('get/shopping_cart/{sessionId}', 'ShoppingCartController@getAuthUserShoppingCart')->name('get.shopping_cart');

    Route::post('post/add_product', 'ShoppingCartController@postAddProductToShoppingCart')->name('post.add_product');
    Route::post('post/remove_product', 'ShoppingCartController@postRemoveProductToShoppingCart')->name('post.remove_product');
});
