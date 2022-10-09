<?php

namespace Modules\Category\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;
use Modules\Category\Entities\Category;
use Throwable;

class CategoryController extends Controller
{
    /**
     * Returns the list of all the categories
     * 
     * @return JsonResponse
     */
    public function getCategoryList(): JsonResponse
    {
        try {
            return response()->json([
                'categories' => Category::all(),
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
