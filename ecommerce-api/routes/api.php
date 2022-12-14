<?php

use Illuminate\Http\Request;
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

Route::name('newsletter.')->prefix('newsletter')->group(function () {
    Route::post('post/add_new_address', 'App\Http\Controllers\Controller@addNewContactToNewsletter')->name('post.add_new');
});
