<?php

namespace Modules\ShoppingCart\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Modules\ShoppingCart\Entities\ShoppingCart;
use Symfony\Component\Console\Input\Input;
use Throwable;

class ShoppingCartController extends Controller
{
    public function getAuthUserShoppingCart($sessionId)
    {
        try {
            $shoppingCarts = ShoppingCart::where('session_id', $sessionId)->get();

            return response()->json([
                'shoppingCart' => $shoppingCarts,
            ]);
        } catch (Throwable $e) {
            return response([
                'message' => [
                    'title' => 'general.api.error.title',
                    'text' => 'general.api.error.text',
                ],
            ], 400);
        }
    }

    public function postAddProductToShoppingCart()
    {
        try {
            $user = Auth::user();
            $shoppingCart = new ShoppingCart();
            $shoppingCart->user_id = $user->id;
            // $shoppingCart->product_id = Input::get('product_id');
            $shoppingCart->save();

            return response()->json(['successuful']);
        } catch (Throwable $e) {
            return response([
                'message' => [
                    'title' => 'general.api.error.title',
                    'text' => 'general.api.error.text',
                ],
            ], 400);
        }
    }

    public function postRemoveProductToShoppingCart()
    {
        try {
            $user = Auth::user();
            $productId = Input::get('product_id');
            ShoppingCart::where('user_id', $user->id)
                ->where('product_id', $productId)
                ->delete();

            return response()->json(['successuful']);
        } catch (Throwable $e) {
            return response([
                'message' => [
                    'title' => 'general.api.error.title',
                    'text' => 'general.api.error.text',
                ],
            ], 400);
        }
    }
}
