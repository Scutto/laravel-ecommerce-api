<?php

namespace Modules\Product\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Product\Entities\Product;
use Throwable;

class ProductController extends Controller
{
    public function getProductsList()
    {
        try {
            return response()->json([
                'products' => Product::all(),
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
