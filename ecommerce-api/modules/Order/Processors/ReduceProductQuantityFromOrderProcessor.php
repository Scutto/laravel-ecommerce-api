<?php

namespace Modules\Order\Processors;

use Modules\Order\Entities\Order;
use Modules\Order\Entities\OrderProduct;
use Modules\Product\Entities\ProductSizeQuantity;

class ReduceProductQuantityFromOrderProcessor {
    public function reduceProductQuantity(Order $order) 
    {
        $order->products->each(
            function(OrderProduct $orderProduct) {
                $productToReduce = ProductSizeQuantity::where('product_id', $orderProduct->product->id)
                    ->where('size', $orderProduct->size)
                    ->first();

                $productToReduce->quantity = $productToReduce->quantity - $orderProduct->quantity;
                $productToReduce->save();
            }
        );
    }
}