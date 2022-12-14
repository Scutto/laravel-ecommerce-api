<?php

namespace Modules\ShoppingCart\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ShoppingCartCoupon
 * 
 * @property integer $id
 * @property integer $shopping_cart_id
 * 
 * @package Modules\ShoppingCart\Entities
 */
class ShoppingCartCoupon extends Model
{
    protected $with = ['coupon'];
    
    protected $fillable = ['shopping_cart_id', 'coupon_stripe_id'];

    /**
     * Defines the relation with Product
     *
     * @return HasMany
     */
    public function coupon()
    {
        return $this->hasOne(Coupon::class, 'id', 'coupon_stripe_id');
    }
}
