<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $roles =[
           ['name' => 'Administrator'],
           ['name' => 'User']
        ];
        Role::factory()->create($roles);
    }
}
