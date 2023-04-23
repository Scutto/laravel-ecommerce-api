<?php

namespace Modules\ShoppingCart\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class ShoppingCart
 * 
 * @property integer $id
 * @property integer $session_id
 * @property integer $user_id
 * 
 * @package Modules\ShoppingCart\Entities
 */
class ShoppingCart extends Model
{
    use HasFactory;

    protected $hidden = ['session_id', 'created_at', 'updated_at', 'user_id'];
    
    /**
     * Defines the relation with User
     *
     * @return HasMany
     */
    public function user()
    {
        return $this->hasOne(User::class);
    }

    /**
     * Defines the relation with Product
     *
     * @return HasMany
     */
    public function products()
    {
        return $this->hasMany(ShoppingCartProduct::class);
    }

    /**
     * Defines the relation with Product
     *
     * @return HasMany
     */
    public function appliedCoupon()
    {
        return $this->hasOne(ShoppingCartCoupon::class);
    }
}
