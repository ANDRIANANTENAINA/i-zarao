<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static insert(array[] $posts)
 * @method static find($id)
 */
class Post extends Model
{
    use HasFactory;

    protected $filliable = [
        'title',
        'content',
        'slug',
        'image',
        'file',
        'status',
        'type',
        'author',
        'user_id'
    ];

    public function responses(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Response::class);
    }

    public function tags(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Tag::class);
    }
}
