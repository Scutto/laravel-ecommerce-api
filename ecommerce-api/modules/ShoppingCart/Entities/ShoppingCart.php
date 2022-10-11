<?php

namespace Modules\ShoppingCart\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Product\Entities\Product;

/**
 * Class ShoppingCart
 * 
 * @property integer $id
 * @property integer $session_id
 * @property integer $user_id
 * @property integer $product_id
 * @property string $size
 * @property integer $quantity
 * 
 * @package Modules\ShoppingCart\Entities
 */
class ShoppingCart extends Model
{
    use HasFactory;

    protected $hidden = ['product_id'];
    
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
    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }
}
