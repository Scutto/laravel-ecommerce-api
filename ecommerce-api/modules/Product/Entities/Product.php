<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Category\Entities\Category;
use Illuminate\Database\Eloquent\Casts\Attribute;

/**
 * Class Product
 * 
 * @property integer $id
 * @property string $title
 * @property string $description
 * @property string $stripe_product_id
 * @property string $stripe_product_price_id
 * @property integer $category_id
 * @property integer $price
 * @property string $available_sizes
 * 
 * @package Modules\Product\Entities
 */
class Product extends Model
{
    use HasFactory;

    protected $hidden = ['category_id'];

    /**
     * Defines the relation with Category
     *
     * @return HasMany
     */
    public function category()
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }

    /**
     * Defines the relation with details images
     *
     * @return HasMany
     */
    public function sizes()
    {
        return $this->hasMany(ProductSizeQuantity::class);
    }

    /**
     * Defines the relation with thumbnail image
     *
     * @return HasOne
     */
    public function thumbnail()
    {
        return $this->hasOne(ProductImage::class)->where('product_images.type', 'thumbnail');
    }

    /**
     * Defines the relation with details images
     *
     * @return HasMany
     */
    public function details()
    {
        return $this
            ->hasMany(ProductImage::class)->where('product_images.type', 'details');
            // ->orderBy('product_images.file');
    }

    /**
     * Get price in decimal
     *
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function price(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                $decimal = substr($value, -2);
                
                return substr($value, 0, strlen($value) - 2) . '.' . $decimal;
            },
        );
    }
}
