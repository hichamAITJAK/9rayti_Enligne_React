<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Social_media>
 */
class Social_mediaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
             'facebook'=>fake()->url(),
             'youtube'=>fake()->url(),
             'instagram'=>fake()->url(),
             'linkdin'=>fake()->url(),
             'user_id'=>fake()->numberBetween(0, 100),
        ];
    }
}
