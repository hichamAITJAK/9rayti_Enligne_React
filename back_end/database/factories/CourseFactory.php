<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=>fake()->sentence(3),
            'duree'=>fake()->randomFloat(1, 0, 1000),
            // 'sex' => fake()->randomElement(['male', 'female']),
            'N_participant'=>fake()->numberBetween(0, 1000),
            'likes'=>fake()->numberBetween(0, 1000),
            'discription'=>fake()->sentence(5),
            'price'=>fake()->numberBetween(0, 500),
            'Language' => fake()->randomElement(['Arab', 'French']),
            'ensignant_id'=>fake()->numberBetween(0, 50),
            'categorie_id'=>fake()->numberBetween(47, 60)
        ];
    }
}
