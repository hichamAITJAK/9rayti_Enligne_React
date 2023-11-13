<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\course_parags>
 */
class course_paragsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_course'=>fake()->numberBetween(0, 200),
            'id_paragraphe'=>fake()->numberBetween(0, 500),
        ];
    }
}
