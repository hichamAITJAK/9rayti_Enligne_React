<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\course_parags;

class course_paragsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        course_parags::factory(500)->create();
    }
}
