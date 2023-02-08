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

Route::name('products.')->prefix('products')->group(function () {
    Route::get('get/all', 'ProductController@getProductsList')->name('get.all');
    Route::get('get/new', 'ProductController@getNewProductsList')->name('get.new');
    Route::get('get/{productId}', 'ProductController@getProductDetails')->name('get.single');
});