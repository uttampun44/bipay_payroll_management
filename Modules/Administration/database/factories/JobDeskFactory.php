<?php

namespace Modules\Administration\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Administration\app\Models\Department;

class JobDeskFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\Administration\app\Models\JobDesk::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
         $departments = Department::pluck('id')->toArray();

        return [
            'job_title' => $this->faker->jobTitle(),
            'job_code' => strtoupper($this->faker->unique()->bothify('JOB###??')),
            'job_description' => '<p>' . $this->faker->paragraph(3) . '</p>',
            'minimum_salary' => $this->faker->numberBetween(30000, 60000),
            'maximum_salary' => $this->faker->numberBetween(60000, 120000),
            'job_requirements' => '<ul><li>' . implode('</li><li>', $this->faker->sentences(3)) . '</li></ul>',
            'job_responsibilities' => '<ul><li>' . implode('</li><li>', $this->faker->sentences(4)) . '</li></ul>',
            'department_id' => $this->faker->randomElement($departments),
        ];
    }
}

