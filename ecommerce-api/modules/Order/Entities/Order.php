<?php

namespace Modules\Order\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\ShoppingCart\Entities\ShoppingCart;

/**
 * Class Order
 * 
 * @property integer $id
 * @property string $title
 * 
 * @package Modules\Order\Entities
 */
class Order extends Model
{
    use HasFactory;

    protected $hidden = [];

    /**
     * Defines the relation with Product
     *
     * @return HasMany
     */
    public function coupon()
    {
        return $this->hasOne(Coupon::class, 'id', 'coupon_stripe_id');
    }

    /**
     * Defines the relation with Product
     *
     * @return HasMany
     */
    public function shoppingCart()
    {
        return $this->hasOne(ShoppingCart::class, 'id', 'session_id');
    }

    /**
     * Defines the relation with Product
     *
     * @return HasMany
     */
    public function products()
    {
        return $this->hasMany(OrderProduct::class);
    }
}
