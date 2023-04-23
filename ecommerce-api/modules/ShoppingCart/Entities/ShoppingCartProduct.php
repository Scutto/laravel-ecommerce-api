<?php

namespace Modules\ShoppingCart\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Product\Entities\Product;

/**
 * Class ShoppingCartProduct
 * 
 * @property integer $id
 * @property integer $shopping_cart_id
 * @property integer $product_id
 * @property string $size
 * @property integer $quantity
 * 
 * @package Modules\ShoppingCart\Entities
 */
class ShoppingCartProduct extends Model
{
    protected $hidden = ['product_id', 'created_at', 'updated_at', 'shopping_cart_id'];

    protected $with = ['product'];

    /**
     * Defines the relation with Product
     *
     * @return HasMany
     */
    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id')->with(['category', 'thumbnail', 'details', 'sizes']);
    }
}
