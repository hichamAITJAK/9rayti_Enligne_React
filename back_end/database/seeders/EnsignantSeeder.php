<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ensignant;

class EnsignantSeeder extends Seeder
{
   
    public function run(): void
    {
        Ensignant::factory(50)->create();
    }
}
