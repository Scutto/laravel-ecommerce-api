<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Category\Entities\Category;

/**
 * Class Product
 * 
 * @property integer $id
 * @property string $title
 * @property string $description
 * @property integer $category_id
 * @property integer $price
 * @property string $available_sizes
 * 
 * @package Modules\Product\Entities
 */
class Product extends Model
{
    use HasFactory;

    protected $fillable = [];

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
        return $this->hasMany(ProductImage::class)->where('product_images.type', 'details');
    }
}
