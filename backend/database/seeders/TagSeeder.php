<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
                'tag'     => 'python',
                'post_id' => 1,
            ],
            [
                'tag'     => 'php',
                'post_id' => 2,
            ],
            [
                'tag'     => 'javascript',
                'post_id' => 3,
            ],
            [
                'tag'     => 'java',
                'post_id' => 4,
            ],
            [
                'tag'     => 'c#',
                'post_id' => 5,
            ],
            [
                'tag'     => 'c++',
                'post_id' => 6,
            ],
            [
                'tag'     => 'c',
                'post_id' => 7,
            ],
            [
                'tag'     => 'ruby',
                'post_id' => 8,
            ],
            [
                'tag'     => 'go',
                'post_id' => 9,
            ],
            [
                'tag'     => 'swift',
                'post_id' => 1,
            ],
            [
                'tag'     => 'kotlin',
                'post_id' => 2,
            ],
            [
                'tag'     => 'rust',
                'post_id' => 3,
            ],
            [
                'tag'     => 'scala',
                'post_id' => 1,
            ],
            [
                'tag'     => 'perl',
                'post_id' => 1,
            ],
            [
                'tag'     => 'lua',
                'post_id' => 2,
            ],
            [
                'tag'     => 'haskell',
                'post_id' => 5,
            ],
            [
                'tag'     => 'erlang',
                'post_id' => 6,
            ],
            [
                'tag'     => 'elixir',
                'post_id' => 7,
            ],
            [
                'tag'     => 'clojure',
                'post_id' => 2,
            ],
            [
                'tag'     => 'dart',
                'post_id' => 6,
            ]
        ];
        Tag::insert($tags);
    }
}
