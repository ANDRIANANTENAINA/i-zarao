<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static insert(array[] $posts)
 * @method static find($id)
 * @method static create(array $all)
 */
class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'slug',
        'image',
        'file',
        'status',
        'type',
        'author',
        'user_id',
        'tag_id',
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
