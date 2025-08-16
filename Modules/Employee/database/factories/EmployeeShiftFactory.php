<?php

namespace Modules\Employee\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Administration\Models\Shift;
use Modules\Employee\Models\Employee;

class EmployeeShiftFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\Employee\Models\EmployeeShift::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {     
        $employee = Employee::pluck('id')->toArray();
        $shifts = Shift::pluck('id')->toArray();
        return [
            'employee_id' => $this->faker->randomElement($employee),
            'shift_id' => $this->faker->randomElement($shifts),
            'start_date' => $this->faker->dateTimeBetween('2020-01-01', '2025-08-30'),
            'end_date' => $this->faker->dateTimeBetween('2020-01-01', '2025-08-30'),
            'is_current' => $this->faker->boolean(),
        ];
    }
}

