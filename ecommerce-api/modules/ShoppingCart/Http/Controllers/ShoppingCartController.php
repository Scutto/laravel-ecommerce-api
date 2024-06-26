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
use Modules\Order\Entities\Order;
use Modules\Order\Entities\OrderProduct;
use Modules\Order\Processors\GetShippingCostProcessor;
use Modules\Order\Processors\GetSubAndTotalAmountForOrderProcessor;
use Modules\ShoppingCart\Entities\ShoppingCartCoupon;
use Esign\ConversionsApi\Facades\ConversionsApi;
use FacebookAds\Object\ServerSide\Event;

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

            ConversionsApi::addEvent(
                (new Event())->setEventName('AddToCart')
            );

            ConversionsApi::sendEvents();

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

            $cartToEdit = ShoppingCart::where('id', $cartData['id'])
                    ->where('session_id', $sessionId)
                    ->firstOrFail();

            foreach($cartData['products'] as $cartProductData) {
                $cartProductToEdit = ShoppingCartProduct::where('id', $cartProductData['id'])
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
            return response()->json([
                'debug' => [$e->getMessage()],
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
            $order = Order::where('session_id', $sessionId)->first();

            $couponCheck = Coupon::where('stripe_id', $couponCode)->first();
            if($couponCheck == null) {
                return response()->json([
                    'valid' => false,
                ]);
            } else {
                if($couponCheck->start_at != null && $couponCheck->start_at > today()) {
                    return response()->json([
                        'valid' => false,
                    ]);
                }

                if($couponCheck->end_at != null && $couponCheck->end_at < today()) {
                    return response()->json([
                        'valid' => false,
                    ]);
                }

                if($couponCheck->unique && $order != null) {
                    $alreadyUsedCoupon = Order::where('coupon_stripe_id', strtoupper($couponCode))
                        ->where('customer_email', $order->customer_email)
                        ->first();

                    if($alreadyUsedCoupon != null) {
                        return response()->json([
                            'valid' => false,
                        ]);
                    }
                }

                ShoppingCartCoupon::updateOrCreate(
                    [
                        'shopping_cart_id' => $shoppingCart->id,
                        'coupon_stripe_id' => $couponCheck->stripe_id
                    ],
                    [
                        'created_at' => now(),
                    ]
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

    public function postRemoveCoupon(Request $request) {
        try {
            $sessionId = $request->get('sessionId');
            $shoppingCart = ShoppingCart::with(['products', 'appliedCoupon'])->where('session_id', $sessionId)->firstOrFail();
            $order = Order::where('session_id', $sessionId)->first();
            $shoppingCart->appliedCoupon->delete();
            $shoppingCart->refresh();
            if($order != null) {
                $order->coupon_stripe_id = null;
                $order->save();
            }
            
            return response()->json([
                'shoppingCart' => $shoppingCart,
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

    public function postOrderData(Request $request) {
        try {
            $sessionId = $request->get('sessionId');
            $formData = $request->get('formData');

            if(Order::where('session_id', $sessionId)->exists()) {
                $order = Order::where('session_id', $sessionId)->firstOrFail();
            } else {
                $order = new Order();
            }

            $order->gateway = null;
            $order->session_id = $sessionId;
            $order->status = 'to_be_payed';
            $order->gateway_id = null;
            $order->amount_total = null;
            $order->shipping_cost = null;
            $order->customer_email = $formData['email'];
            $order->customer_firstname = $formData['firstname'];
            $order->customer_phone = $formData['phone'];
            $order->customer_lastname = $formData['lastname'];
            $order->address_street = $formData['address'];
            $order->address_city = $formData['town'];
            $order->address_zipcode = $formData['postalcode'];
            $order->address_region = $formData['state'];
            $order->address_country = $formData['country'];
            $order->gateway_payload = null;

            $order->save();
            $order->refresh();

            $shoppingCart = ShoppingCart::with(['products', 'appliedCoupon'])->where('session_id', $sessionId)->firstOrFail();
            if($shoppingCart->appliedCoupon != null) {
                $shoppingCart->appliedCoupon->delete();
                $shoppingCart->refresh();
            }

            return response()->json([
                'order' => $order,
                'shoppingCart' => $shoppingCart,
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

    public function postCheckSessionId(Request $request) {
        try {
            $sessionId = $request->get('sessionId');
            $checkCarts = ShoppingCart::where('session_id', $sessionId)->exists();
            $checkOrders = Order::where('session_id', $sessionId)->exists();

            return response()->json([
                'valid' => !$checkOrders && !$checkCarts,
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
            $order = Order::where('session_id', $sessionId)->firstOrFail();
            $processorShipping = resolve(GetShippingCostProcessor::class);
            $processorAmount = resolve(GetSubAndTotalAmountForOrderProcessor::class);

            foreach($shoppingCart->products as $shoppingCartProduct) {
                $lineItems[] = [
                    'price' => $shoppingCartProduct->product->stripe_product_price_id,
                    'quantity' => $shoppingCartProduct->quantity,
                ];

                OrderProduct::updateOrCreate(
                    [
                        'order_id' => $order->id,
                        'product_id' => $shoppingCartProduct->product->id,
                        'size' => $shoppingCartProduct->size,
                    ],
                    [
                        'quantity' => $shoppingCartProduct->quantity
                    ]
                );
            }

            if($shoppingCart->appliedCoupon != null) {
                $appliedCouponsArray[] = [
                    'coupon' => $shoppingCart->appliedCoupon->coupon->stripe_id,
                ];

                $order->coupon_stripe_id = $shoppingCart->appliedCoupon->coupon->stripe_id;
            } else {
                $order->coupon_stripe_id = null;
            }

            $order->save();
            $order->refresh();

            $shippingCost = $processorShipping->getShippingCost($order, $processorAmount->getOrderTotalAmount($order, false));

            if($order->address_country === 'italy') {
                $min = 1;
                $max = 2;
            } else {
                $min = 3;
                $max = 5;
            }

            $stripeCheckoutData = [
                'discounts' => $appliedCouponsArray,
                'payment_method_types' => ['card'],
                // 'shipping_address_collection' => ['allowed_countries' => ['IT', 'NL']],
                'shipping_options' => [
                  [
                    'shipping_rate_data' => [
                        'type' => 'fixed_amount',
                        'fixed_amount' => ['amount' => $shippingCost * 100, 'currency' => 'eur'],
                        'display_name' => 'Shipping Cost',
                        'delivery_estimate' => [
                            'minimum' => ['unit' => 'business_day', 'value' => $min],
                            'maximum' => ['unit' => 'business_day', 'value' => $max],
                        ],
                    ],
                  ],
                ],
                'line_items' => $lineItems,
                'mode' => 'payment',
                'success_url' => $domain . '/shop/checkout/success/' . $order->session_id,
                'cancel_url' => $domain . '/shop/checkout',
              ];

            $session = Cashier::stripe()->checkout->sessions->create($stripeCheckoutData);

            $order->gateway = 'stripe';
            $order->gateway_id = $session['id'];
            $order->save();

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
