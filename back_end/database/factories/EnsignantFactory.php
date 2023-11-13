<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ensignant>
 */
class EnsignantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'nom complet'=>fake()->FirstName(),
            'Spesialisation'=>fake()->FirstName(),
            'email'=>fake()->unique()->safeEmail(),
            'password'=>fake()->FirstName(),
            'sex' => fake()->randomElement(['male', 'female']),
            'age'=>fake()->numberBetween(0, 1000),
            'tel'=>fake()->phoneNumber(),
            'Nb_course'=>fake()->numberBetween(0, 100),
            'Nb_participant'=>fake()->numberBetween(0, 1000),
            'social_media_id'=>fake()->numberBetween(0, 50),
        ];
    }
}
