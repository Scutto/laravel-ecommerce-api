<?php

namespace Modules\ShoppingCart\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;
use Modules\ShoppingCart\Entities\ShoppingCart;
use Illuminate\Http\Request;
use Throwable;
use Laravel\Cashier\Checkout;

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
     */
    public function postAddProductToShoppingCart(Request $request)
    {
        try {
            $inputs = $request->all();
            $checkCartUpdate = ShoppingCart::where('session_id', $inputs['sessionId'])
                ->where('product_id', $inputs['productId'])
                ->where('size', $inputs['size'])
                ->first();

            if($checkCartUpdate != null) {
                $checkCartUpdate->quantity = $checkCartUpdate->quantity + $inputs['quantity'];
                $checkCartUpdate->save();
            } else {
                $shoppingCart = new ShoppingCart();
                $shoppingCart->session_id = $inputs['sessionId'];
                $shoppingCart->size = $inputs['size'];
                $shoppingCart->quantity = $inputs['quantity'];
                $shoppingCart->product_id = $inputs['productId'];
                $shoppingCart->save();
            }
            
            $shoppingCarts = ShoppingCart::with(['product'])
                ->where('session_id', $inputs['sessionId'])
                ->get();

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

    public function checkout(Request $request)
    {
        try {
            $sessionId = $request->get('sessionId');
            $shoppingCarts = ShoppingCart::with(['product'])->where('session_id', $sessionId)->get();
            $domain = config('app.frontend_url');
            $stripeCheckoutData = [];

            foreach($shoppingCarts as $shoppingCart) {
                $stripeCheckoutData = array_merge([$shoppingCart->product->stripe_product_price_id => $shoppingCart->quantity], $stripeCheckoutData);
            }

            $checkoutSession = Checkout::guest()->create($stripeCheckoutData, [
                'success_url' => $domain . '?state=test_success',
                'cancel_url' => $domain . '?state=test_cancel',
            ])->toArray();

            return response()->json([
                'url' => $checkoutSession['url'],
            ]);
        } catch (Throwable $e) {
            return response([
                'message' => [
                    'debug' => [$e->getMessage()],
                    'title' => 'general.api.error.title',
                    'text' => 'general.api.error.text',
                ],
            ], 400);
        }
    }
    
}
