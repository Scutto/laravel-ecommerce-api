<?php

namespace Modules\ShoppingCart\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;
use Modules\ShoppingCart\Entities\ShoppingCart;
use Illuminate\Http\Request;
use Throwable;
use Laravel\Cashier\Cashier;
use Modules\ShoppingCart\Entities\ShoppingCartProduct;
use Modules\ShoppingCart\Entities\Coupon;
use Modules\ShoppingCart\Entities\ShoppingCartCoupon;

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
            $shoppingCart = ShoppingCart::with(['products', 'appliedCoupon'])->where('session_id', $sessionId)->first();

            return response()->json([
                'shoppingCart' => $shoppingCart,
            ]);
        } catch (Throwable $e) {
            return response()->json([
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
            $shoppingCart = ShoppingCart::where('session_id', $inputs['sessionId'])->first();

            if($shoppingCart == null) {
                $shoppingCart = new ShoppingCart();
                $shoppingCart->session_id = $inputs['sessionId'];
                $shoppingCart->save();
            }

            $checkProduct = ShoppingCartProduct::where('shopping_cart_id', $shoppingCart->id)
                ->where('product_id', $inputs['productId'])
                ->where('size', $inputs['size'])
                ->first();

            if($checkProduct != null) {
                $checkProduct->quantity = $checkProduct->quantity + $inputs['quantity'];
                $checkProduct->save();
            } else {
                $shoppingCartProduct = new ShoppingCartProduct();
                $shoppingCartProduct->shopping_cart_id = $shoppingCart->id;
                $shoppingCartProduct->product_id = $inputs['productId'];
                $shoppingCartProduct->size = $inputs['size'];
                $shoppingCartProduct->quantity = $inputs['quantity'];
                $shoppingCartProduct->save();
            }
            
            $shoppingCart = ShoppingCart::with(['products', 'appliedCoupon'])
                ->where('session_id', $inputs['sessionId'])
                ->first();

            return response()->json([
                'shoppingCart' => $shoppingCart,
            ]);
        } catch (Throwable $e) {
            return response([
                'debug' => [$e->getMessage(), $e->getFile(), $e->getLine()],
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
            $productId = $request->get('productId');
            $size = $request->get('size');
            
            $shoppingCart = ShoppingCart::where('session_id', $sessionId)->first();
            if($shoppingCart != null) {
                ShoppingCartProduct::where('shopping_cart_id', $shoppingCart->id)
                    ->where('product_id', $productId)
                    ->where('size', $size)
                    ->delete();
            }

            $shoppingCart = ShoppingCart::with(['products', 'appliedCoupon'])
            ->where('session_id', $sessionId)
            ->first();

            return response()->json([
                'shoppingCart' => $shoppingCart,
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

            $shoppingCart = ShoppingCart::with(['products', 'appliedCoupon'])
            ->where('session_id', $sessionId)
            ->first();

            return response()->json([
                'shoppingCart' => $shoppingCart,
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

    public function postApplyCoupon(Request $request) {
        try {
            $couponCode = $request->get('couponCode');
            $sessionId = $request->get('sessionId');

            $shoppingCart = ShoppingCart::where('session_id', $sessionId)->first();

            $couponCheck = Coupon::where('stripe_id', $couponCode)->first();
            if($couponCheck == null) {
                return response()->json([
                    'valid' => false,
                ]);
            } else {
                ShoppingCartCoupon::updateOrCreate(
                    [
                        'shopping_cart_id' => $shoppingCart->id,
                        'coupon_stripe_id' => $couponCheck->id
                    ],
                    []
                );

                $shoppingCart = ShoppingCart::with(['products', 'appliedCoupon'])
                    ->where('session_id', $sessionId)
                    ->first();

                return response()->json([
                    'valid' => true,
                    'shoppingCart' => $shoppingCart,
                ]);
            }
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

    public function postDeleteShoppingCarts(Request $request) {
        try {
            $sessionId = $request->get('sessionId');
            ShoppingCart::where('session_id', $sessionId)->delete();

            return response()->json([
                'successful'
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

    public function checkout(Request $request)
    {
        try {
            $sessionId = $request->get('sessionId');
            $shoppingCart = ShoppingCart::with(['products', 'appliedCoupon'])->where('session_id', $sessionId)->first();
            $domain = config('app.frontend_url');
            $lineItems = [];
            $appliedCouponsArray = [];

            foreach($shoppingCart->products as $shoppingCartProduct) {
                $lineItems[] = [
                    'price' => $shoppingCartProduct->product->stripe_product_price_id,
                    'quantity' => $shoppingCartProduct->quantity,
                ];
            }

            if($shoppingCart->appliedCoupon != null) {
                $appliedCouponsArray[] = [
                    'coupon' => $shoppingCart->appliedCoupon->coupon->stripe_id,
                ];
            }

            $stripeCheckoutData = [
                'discounts' => $appliedCouponsArray,
                'payment_method_types' => ['card'],
                'shipping_address_collection' => ['allowed_countries' => ['IT', 'NL']],
                'shipping_options' => [
                  [
                    'shipping_rate_data' => [
                        'type' => 'fixed_amount',
                        'fixed_amount' => ['amount' => 100, 'currency' => 'eur'],
                        'display_name' => 'Shipping Cost',
                        'delivery_estimate' => [
                            'minimum' => ['unit' => 'business_day', 'value' => 5],
                            'maximum' => ['unit' => 'business_day', 'value' => 7],
                        ],
                    ],
                  ],
                ],
                'line_items' => $lineItems,
                'mode' => 'payment',
                'success_url' => $domain . '?stripeSuccessful=true',
                'cancel_url' => $domain . '?stripeCanceled=true',
              ];

            $session = Cashier::stripe()->checkout->sessions->create($stripeCheckoutData);

            return response()->json([
                'url' => $session->url,
            ]);
        } catch (Throwable $e) {
            return response([
                'message' => [
                    'debug' => [$e->getMessage(), $e->getFile(), $e->getLine()],
                    'title' => 'general.api.error.title',
                    'text' => 'general.api.error.text',
                ],
            ], 400);
        }
    }
    
}
