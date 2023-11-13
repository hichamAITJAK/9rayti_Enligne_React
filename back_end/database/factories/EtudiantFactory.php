<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Etudiant>
 */
class EtudiantFactory extends Factory
{
    
    public function definition(): array
    {
        return [
            'nom complet'=>fake()->FirstName(),
            'email'=>fake()->unique()->safeEmail(),
            'password'=>fake()->FirstName(),
            'sex' => fake()->randomElement(['male', 'female']),
            'age'=>fake()->numberBetween(0, 1000),
            'tel'=>fake()->phoneNumber(),
            'Nb_course'=>fake()->numberBetween(0, 100),
            'social_media_id'=>fake()->numberBetween(0, 50),
        ];
    }
}
