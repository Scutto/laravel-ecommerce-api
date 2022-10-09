<?php

namespace Modules\ShoppingCart\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;
use Modules\ShoppingCart\Entities\ShoppingCart;
use Illuminate\Http\Request;
use Throwable;

class ShoppingCartController extends Controller
{
    /**
     * Returns the shopping carts based on a session
     * 
     * @return JsonResponse
     */
    public function getShoppingCartBySessionId(string $sessionId): JsonResponse
    {
        try {
            $shoppingCarts = ShoppingCart::with(['product'])->where('session_id', $sessionId)->get();

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

    /**
     * Adds a new product to a shopping cart
     * 
     * @return JsonResponse
     */
    public function postAddProductToShoppingCart(Request $request): JsonResponse
    {
        try {
            $inputs = $request->all();

            $shoppingCart = new ShoppingCart();
            $shoppingCart->session_id = $inputs['sessionId'];
            $shoppingCart->size = $inputs['size'];
            $shoppingCart->quantity = $inputs['quantity'];
            $shoppingCart->product_id = $inputs['productId'];
            $shoppingCart->save();

            $shoppingCarts = ShoppingCart::with(['product'])->where('session_id', $inputs['sessionId'])->get();

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

    /**
     * Removes a product from a shopping cart
     * 
     * @return JsonResponse
     */
    public function postRemoveProductToShoppingCart(Request $request): JsonResponse
    {
        try {
            $sessionId = $request->get('sessionId');
            $cartId = $request->get('cartId');
            
            ShoppingCart::where('id', $cartId)->delete();

            $shoppingCarts = ShoppingCart::with(['product'])->where('session_id', $sessionId)->get();

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

    /**
     * Updates the product quantity on multiple shopping carts
     * 
     * @return JsonResponse
     */
    public function postUpdateProductsToShoppingCart(Request $request): JsonResponse
    {
        try {
            $cartData = $request->get('cartData');
            $sessionId = $request->get('sessionId');

            foreach($cartData as $cartProductData) {
                $cartProductToEdit = ShoppingCart::where('id', $cartProductData['id'])
                    ->where('session_id', $sessionId)
                    ->firstOrFail();

                $cartProductToEdit->quantity = $cartProductData['quantity'];
                $cartProductToEdit->save();
            }

            $shoppingCarts = ShoppingCart::with(['product'])->where('session_id', $sessionId)->get();

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
}
