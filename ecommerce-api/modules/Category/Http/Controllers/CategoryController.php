<?php

namespace Modules\Category\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Category\Entities\Category;
use Throwable;

class CategoryController extends Controller
{
    public function getCategoryList()
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
