<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'John D. Doe',
            'email' => 'johndoe@example.com',
            'password' => 'Passw0rd1234',
        ]);
    }
}
