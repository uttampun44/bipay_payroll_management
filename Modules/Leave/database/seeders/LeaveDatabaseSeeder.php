<?php

namespace Modules\Leave\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Leave\Models\LeaveType;

class LeaveDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $this->call([]);
         
        $leaveTypes = [
            [
                'leave_type_name' => 'Sick Leave',
                'leave_code' => 'SL',
                'description' => 'Sick Leave',
                'max_days_per_year' => 5,
                'carry_forward_allowed' => false,
                'max_carry_forward_days' => 5,
                'is_paid' => false,
                'require_approval' => true,
                'notice_days_required' => 0,
                'status' => true,
            ],
            [
                'leave_type_name' => 'Holiday Leave',
                'leave_code' => 'HL',
                'description' => 'Holiday Leave',
                'max_days_per_year' => 10,
                'carry_forward_allowed' => true,
                'max_carry_forward_days' => 10,
                'is_paid' => true,
                'require_approval' => true,
                'notice_days_required' => 2,
                'status' => true,
            ],
            [
                'leave_type_name' => 'Annual Leave',
                'leave_code' => 'AL',
                'description' => 'Annual Leave',
                'max_days_per_year' => 15,
                'carry_forward_allowed' => true,
                'max_carry_forward_days' => 15,
                'is_paid' => true,
                'require_approval' => true,
                'notice_days_required' => 2,
                'status' => true,
            ]
            ];
            foreach ($leaveTypes as $leaveType) {
                LeaveType::insert($leaveType);
            }
    }
}
