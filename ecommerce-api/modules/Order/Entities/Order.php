<?php

namespace Modules\Order\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
    use HasFactory;

    protected $hidden = [];

    /**
     * Defines the relation with Category
     *
     * @return HasMany
     */
    // public function category()
    // {
    //     return $this->hasOne(Category::class, 'id', 'category_id');
    // }
}
