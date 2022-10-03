<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Category\Entities\Category;

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
        return $this->hasOne(Category::class);
    }
}
