<?php

namespace Modules\Category\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Category
 * 
 * @property integer $id
 * @property string $name
 * @property integer $parent_id
 * 
 * @package Modules\Category\Entities
 */
class Category extends Model
{
    use HasFactory;

    protected $hidden = ['parent_id'];

    /**
     * Defines the relation with the parent Category
     *
     * @return BelongsTo
     */
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id', 'id');
    }
}
