<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ProductSizeQuantity
 * 
 * @property integer $id
 * 
 * @package Modules\Product\Entities
 */
class ProductSizeQuantity extends Model
{
    protected $hidden = ['product_id', 'created_at', 'updated_at'];

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
