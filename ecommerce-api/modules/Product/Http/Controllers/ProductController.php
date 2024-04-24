<?php

namespace Modules\Product\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;
use Modules\Product\Entities\Product;
use Throwable;
use Esign\ConversionsApi\Facades\ConversionsApi;
use FacebookAds\Object\ServerSide\Event;

class ProductController extends Controller
{
    /**
     * Returns the list of all the products
     * 
     * @return JsonResponse
     */
    public function getProductsList()
    {
        try {
            $products = Product::with([
                'category',
                'thumbnail',
                'details',
                'sizes',
                'sizeChart',
                'colorVariant',
                'variants',
                'variants.sizes',
                'variants.colorVariant',
            ])->whereNotNull('stripe_product_id')
                ->whereNotNull('stripe_product_price_id')
                ->whereNull('parent_id')
                ->orderByDesc('id')
                ->get();

            ConversionsApi::addEvent(
                (new Event())->setEventName('ViewContent')
            );

            ConversionsApi::sendEvents();

            return response()->json([
                'products' => $products,
            ]);
        } catch (Throwable $e) {
            return response([
                'debug' => [$e->getMessage(), $e->getFile(), $e->getLine(), $e->getTrace()],
                'message' => [
                    'title' => 'general.api.error.title',
                    'text' => 'general.api.error.text',
                ],
            ], 400);
        }
    }

    /**
     * Returns the list of all the products
     * 
     * @return JsonResponse
     */
    public function getNewProductsList(): JsonResponse
    {
        try {
            $products = Product::with(['category', 'thumbnail', 'details', 'sizes', 'sizeChart', 'variants', 'variants.sizes', 'variants.colorVariant', 'colorVariant'])
                ->whereNotNull('stripe_product_id')
                ->whereNotNull('stripe_product_price_id')
                ->whereNull('parent_id')
                ->orderByDesc('created_at')
                ->limit(4)
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
            $product = Product::with(['category', 'thumbnail', 'details', 'sizes', 'sizeChart', 'variants', 'variants.sizes', 'variants.colorVariant', 'colorVariant'])
                ->where('id', $productId)
                ->whereNotNull('stripe_product_id')
                ->whereNotNull('stripe_product_price_id')
                ->firstOrFail();

            if($product->parent_id != null) {
                $product = Product::with(['category', 'thumbnail', 'details', 'sizes', 'sizeChart', 'variants', 'variants.sizes', 'variants.colorVariant', 'colorVariant'])
                ->where('id', $product->parent_id)
                ->whereNotNull('stripe_product_id')
                ->whereNotNull('stripe_product_price_id')
                ->whereNull('parent_id')
                ->firstOrFail();
            }

            $relatedProducts = Product::with(['category', 'thumbnail', 'details', 'sizes', 'sizeChart', 'variants', 'variants.sizes', 'variants.colorVariant', 'colorVariant'])
                ->where('category_id', $product->category_id)
                ->where('id', '!=', $product->id)
                ->whereNotNull('stripe_product_id')
                ->whereNotNull('stripe_product_price_id')
                ->whereNull('parent_id')
                ->get();

            return response()->json([
                'product' => $product,
                'relatedProducts' => $relatedProducts,
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
