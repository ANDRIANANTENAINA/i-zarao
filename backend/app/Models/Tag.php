<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array[] $tags)
 * @method static insert(array[] $tags)
 */
class Tag extends Model
{
    use HasFactory;

    protected $fillable = [
        'tag',
        'post_id'
    ];

    public function post(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Post::class);
    }
}
