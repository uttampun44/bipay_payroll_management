<?php

namespace Modules\Administration\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Administration\Models\Shift;

class ShiftsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $this->call([]);

        $shifts = [
            [
                'shift_name' => 'Day Shift',
                'shift_code' => 'DAY',
                'start_time' => '08:00:00',
                'end_time' => '16:00:00',
                'break_duration' => 30,
                'working_hours' => 8,
                'overtime_rate' => 1.5,
                'night_shift_allowance' => 100.00,
                'weekend_rate' => 2.0,
                'status' => true,
            ],
            [
                'shift_name' => 'Evening Shift',
                'shift_code' => 'EVENING',
                'start_time' => '17:00:00',
                'end_time' => '23:00:00',
                'break_duration' => 30,
                'working_hours' => 8,
                'overtime_rate' => 1.5,
                'night_shift_allowance' => 100.00,
                'weekend_rate' => 2.0,
                'status' => true,
            ],
            [
                'shift_name' => 'Night Shift',
                'shift_code' => 'NIGHT',
                'start_time' => '00:00:00',
                'end_time' => '06:00:00',
                'break_duration' => 30,
                'working_hours' => 8,
                'overtime_rate' => 1.5,
                'night_shift_allowance' => 100.00,
                'weekend_rate' => 2.0,
                'status' => true,
            ],
            [
                'shift_name' => 'Weekend Shift',
                'shift_code' => 'WEEKEND',
                'start_time' => '00:00:00',
                'end_time' => '24:00:00',
                'break_duration' => 0,
                'working_hours' => 12,
                'overtime_rate' => 2.0,
                'night_shift_allowance' => 0.00,
                'weekend_rate' => 3.0,
                'status' => true,
            ],
        ];

        foreach ($shifts as $shift) {
            Shift::insert($shift);
        }
    }
}
