<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = [
            [
                'tag'     => 'tag 1',
                'post_id' => 1,
            ],
            [
                'tag'     => 'tag 2',
                'post_id' => 2,
            ],
            [
                'tag'     => 'tag 3',
                'post_id' => 3,
            ],
            [
                'tag'     => 'tag 4',
                'post_id' => 1,
            ],
            [
                'tag'     => 'tag 5',
                'post_id' => 2,
            ],
            [
                'tag'     => 'tag 6',
                'post_id' => 1,
            ],
            [
                'tag'     => 'tag 7',
                'post_id' => 3,
            ],
            [
                'tag'     => 'tag 8',
                'post_id' => 4,
            ],
            [
                'tag'     => 'tag 9',
                'post_id' => 5,
            ],
            [
                'tag'     => 'tag 10',
                'post_id' => 5,
            ],
        ];

        Tag::insert($tags);
    }
}
