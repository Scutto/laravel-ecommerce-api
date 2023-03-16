<?php

namespace Modules\Order\Processors;

use Modules\Order\Entities\Order;
use Modules\Order\Entities\OrderProduct;

class GetSubAndTotalAmountForOrderProcessor {

    public function getOrderSubTotalAmount(Order $order): float {
        $subTotal = 0;
        $order->products->each(
            function(OrderProduct $orderProduct) use(&$subTotal) {
                $subTotal += $orderProduct->product->price * $orderProduct->quantity;
            }
        );

        return $subTotal;
    }

    public function getOrderTotalAmount(Order $order): float {
        $total = 0;
        $subTotal = $this->getOrderSubTotalAmount($order);
        $total = $subTotal;
        if($order->coupon != null) {
            if($order->coupon->type === 'fixed') {
                $total = $subTotal - $order->coupon->amount_off;
            } else if($order->coupon->type === 'percentage') {
                $toSub = $subTotal * $order->coupon->amount_off;
                $total = $subTotal - $toSub;
            }
        }

        return $total + $order->shipping_cost;
    }

}