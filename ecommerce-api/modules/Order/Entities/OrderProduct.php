<?php

namespace Modules\Order\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\Product\Entities\Product;

/**
 * Class OrderProduct
 * 
 * @property integer $id
 * @property integer $shopping_cart_id
 * @property integer $product_id
 * @property string $size
 * @property integer $quantity
 * 
 * @package Modules\Order\Entities
 */
class OrderProduct extends Model
{
    protected $hidden = ['product_id'];

    protected $with = ['product'];

    /**
     * Defines the relation with Product
     *
     * @return HasMany
     */
    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }

    /**
     * Defines the relation with Order
     *
     * @return HasMany
     */
    public function order()
    {
        return $this->hasOne(Order::class, 'id', 'order_id');
    }
}
