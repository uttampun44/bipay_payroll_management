<?php

namespace Modules\Employee\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;
use Modules\Administration\app\Models\Department;
use Modules\Administration\app\Models\JobDesk;
use Illuminate\Support\Str;

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
        $uuid = Str::uuid();
        Storage::disk('public')->makeDirectory('employee');
 
        $imageName = $this->faker->image(
            storage_path('app/public/employee'),
            500,
            500,
            null,
            false
        );
    
        return [
            'employee_code' => $this->faker->unique()->randomNumber(6),
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'email' => $this->faker->unique()->safeEmail(),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'hire_date' => $this->faker->date(),
            'department_id' => $this->faker->randomElement(Department::pluck('id')->toArray()),
            'job_desk_id' => $this->faker->randomElement(JobDesk::pluck('id')->toArray()),
            'employment_status' => $this->faker->boolean(),
            'basic_salary' => $this->faker->randomFloat(2, 100, 1000),
            'image' => 'employee/' . $uuid . '.png' . pathinfo($imageName, PATHINFO_EXTENSION),
        ];
    }
}
