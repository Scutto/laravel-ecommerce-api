<?php

namespace Modules\ShoppingCart\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

/**
 * Class Coupon
 * 
 * @property integer $id
 * 
 * @package Modules\ShoppingCart\Entities
 */
class Coupon extends Model
{
    protected $hidden = ['created_at', 'updated_at'];

    protected $guarded = [];

    /**
     * Get the user's first name.
     *
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function amountOff(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                $decimal = substr($value, -2);
                
                return substr($value, 0, strlen($value) - 2) . '.' . $decimal;
            },
        );
    }
}
