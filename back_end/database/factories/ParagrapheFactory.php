<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paragraphe>
 */
class ParagrapheFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'paragraphe_title'=>fake()->FirstName(),
            'paragraphe_discription'=>fake()->sentence(),
        ];
    }
}
