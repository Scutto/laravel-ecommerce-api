<?php

namespace Modules\ShoppingCart\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Product\Entities\Product;

class ShoppingCart extends Model
{
    use HasFactory;

    protected $fillable = [];
    
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
        return $this->hasOne(Product::class);
    }
}
