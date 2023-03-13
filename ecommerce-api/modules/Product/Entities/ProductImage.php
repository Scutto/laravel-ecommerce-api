<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class ProductImage
 * 
 * @property integer $id
 * @property integer $product_id
 * @property string $file
 * @property string $type
 * 
 * @package Modules\Product\Entities
 */
class ProductImage extends Model
{
    use HasFactory;

    protected $hidden = ['product_id'];

    protected $appends = ['imageUrl'];

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
     * Appends the correct path for the images
     */
    public function getImageUrlAttribute()
    {
        if($this->type == 'size_chart') {
            return asset('storage/products/size_charts/'. $this->file);
        }

        return asset('storage/products/images/'. strtolower($this->product->title) . '/' . $this->file);
    }
}
