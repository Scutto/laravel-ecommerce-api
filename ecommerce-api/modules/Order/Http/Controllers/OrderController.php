<?php

namespace Modules\Order\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Order\Entities\Order;
use Throwable;

class OrderController extends Controller
{
    /**
     * Adds a new order from paypal
     */
    public function getOrderFromSessionId($sessionId)
    {
        try {
            $order = Order::with(['products', 'products.product.thumbnail'])
                ->where('session_id', $sessionId)
                ->first();

            return response()->json([
                'order' => $order,
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
}
