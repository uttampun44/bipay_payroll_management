<?php

namespace Modules\Employee\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Administration\app\Models\Department;
use Modules\Administration\app\Models\JobDesk;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\Employee\Models\Employee::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'employee_code' => $this->faker->unique()->randomNumber(6),
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => bcrypt('password'),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'hire_date' => $this->faker->date(),
            'department_id' => $this->faker->randomElement(Department::pluck('id')->toArray()),
            'job_desk_id' => $this->faker->randomElement(JobDesk::pluck('id')->toArray()),
            'employment_status' => $this->faker->boolean(),
            'basic_salary' => $this->faker->randomFloat(2, 100, 1000),
            'image' => $this->faker->imageUrl(),
        ];
    }
}

