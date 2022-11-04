<?php

namespace Modules\Product\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;
use Modules\Product\Entities\Product;
use Throwable;

class ProductController extends Controller
{
    /**
     * Returns the list of all the products
     * 
     * @return JsonResponse
     */
    public function getProductsList(): JsonResponse
    {
        try {
            $products = Product::with(['category', 'thumbnail', 'details'])
                ->whereNotNull('stripe_product_id')
                ->whereNotNull('stripe_product_price_id')
                ->get();

            return response()->json([
                'products' => $products,
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
     * Returns the details for one product
     * 
     * @return JsonResponse
     */
    public function getProductDetails(string $productId): JsonResponse
    {
        try {
            return response()->json([
                'product' => Product::where('id', $productId)->firstOrFail(),
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
