<?php

namespace Modules\Order\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\ShoppingCart\Entities\ShoppingCart;
use App\Traits\Encryptable;

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
    use HasFactory, Encryptable;

    protected $hidden = [];

    protected $encryptable = [
        'customer_email',
        'customer_firstname',
        'customer_lastname',
        'customer_phone',
        'address_street',
        'address_street_2',
        'address_city',
        'address_zipcode',
        'address_region',
        'address_country',
        'gateway_payload',
    ];

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
