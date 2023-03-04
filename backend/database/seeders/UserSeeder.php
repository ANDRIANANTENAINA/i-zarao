<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name'           => 'admin',
                'lastname'       => 'admin',
                'email'          => 'teste@gmail.com',
                'matricule'      => '00001',
                'state'          => '1',
                'role'           => '1',
                'password'       => bcrypt('12345678'),
                'remember_token' => null,
            ],
        ];

        User::insert($users);
    }
}
