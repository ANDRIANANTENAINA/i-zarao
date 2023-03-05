<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $posts = [
            [
                'title'       => 'Post 1',
                'content'     => 'Content 1',
                'image'       => 'image1.jpg',
                'file'        => 'file1.pdf',
                'status'      => '1',
                'type'        => '1',
                'author'     => 'teste',
                'user_id'     => 1,
            ],
            [
                'title'       => 'Post 2',
                'content'     => 'Content 2',
                'image'       => 'image2.jpg',
                'file'        => 'file2.pdf',
                'status'      => '1',
                'type'        => '1',
                'author'     => 'teste',
                'user_id'     => 1,
            ],
            [
                'title'       => 'Post 3',
                'content'     => 'Content 3',
                'image'       => 'image3.jpg',
                'file'        => 'file3.pdf',
                'status'      => '1',
                'type'        => '1',
                'author'     => 'teste',
                'user_id'     => 1,
            ],
            [
                'title'       => 'Post 4',
                'content'     => 'Content 4',
                'image'       => 'image4.jpg',
                'file'        => 'file4.pdf',
                'status'      => '1',
                'type'        => '1',
                'author'     => 'teste',
                'user_id'     => 1,
            ],
            [
                'title'       => 'Post 5',
                'content'     => 'Content 5',
                'image'       => 'image5.jpg',
                'file'        => 'file5.pdf',
                'status'      => '1',
                'type'        => '1',
                'author'     => 'teste',
                'user_id'     => 1,
            ],
            [
                'title'       => 'Post 6',
                'content'     => 'Content 6',
                'image'       => 'image6.jpg',
                'file'        => 'file6.pdf',
                'status'      => '1',
                'type'        => '1',
                'author'     => 'teste',
                'user_id'     => 1,
            ],
            [
                'title'       => 'Post 7',
                'content'     => 'Content 7',
                'image'       => 'image7.jpg',
                'file'        => 'file7.pdf',
                'status'      => '1',
                'type'        => '1',
                'author'     => 'teste',
                'user_id'     => 1,
            ],
            [
                'title'       => 'Post 8',
                'content'     => 'Content 8',
                'image'       => 'image8.jpg',
                'file'        => 'file8.pdf',
                'status'      => '1',
                'type'        => '1',
                'author'     => 'teste',
                'user_id'     => 1,
            ],
            [
                'title'       => 'Post 9',
                'content'     => 'Content 9',
                'image'       => 'image9.jpg',
                'file'        => 'file9.pdf',
                'status'      => '1',
                'type'        => '1',
                'author'     => 'teste',
                'user_id'     => 1,
            ],
            [
                'title'       => 'Post 10',
                'content'     => 'Content 10',
                'image'       => 'image10.jpg',
                'file'        => 'file10.pdf',
                'status'      => '1',
                'type'        => '1',
                'author'     => 'teste',
                'user_id'     => 1,
            ],
            [
                'title'       => 'Post 11',
                'content'     => 'Content 11',
                'image'       => 'image11.jpg',
                'file'        => 'file11.pdf',
                'status'      => '1',
                'type'        => '1',
                'author'     => 'teste',
                'user_id'     => 1,
            ]
        ];

        Post::insert($posts);
    }
}
