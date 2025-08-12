<?php

namespace Modules\Administration\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Administration\app\Models\Department;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $this->call([]);
        $departments = [
            [
                'department_name' => 'Human Resources',
                'department_code' => 'HR',
                'description' => 'Handles recruitment, employee relations, and policies.',
                'budget' => 75000.00,
                'status' => true,
            ],
            [
                'department_name' => 'Software Development',
                'department_code' => 'DEV',
                'description' => 'Builds and maintains software applications.',
                'budget' => 200000.00,
                'status' => true,
            ],
            [
                'department_name' => 'Sales',
                'department_code' => 'SAL',
                'description' => 'Responsible for customer acquisition and sales strategy.',
                'budget' => 150000.00,
                'status' => true,
            ],
            [
                'department_name' => 'Accounting',
                'department_code' => 'ACC',
                'description' => 'Manages financial records, ledgers, and audits.',
                'budget' => 100000.00,
                'status' => true,
            ],
            [
                'department_name' => 'Payroll',
                'department_code' => 'PAY',
                'description' => 'Handles employee salary processing and payroll taxes.',
                'budget' => 120000.00,
                'status' => true,
            ],
            [
                'department_name' => 'Recruitment',
                'department_code' => 'REC',
                'description' => 'Manages job postings, hiring processes, and onboarding.',
                'budget' => 50000.00,
                'status' => true,
            ],
            [
                'department_name' => 'IT Support',
                'department_code' => 'IT',
                'description' => 'Maintains hardware, software, and user support systems.',
                'budget' => 80000.00,
                'status' => true,
            ],
           
            [
                'department_name' => 'Training & Development',
                'department_code' => 'TRN',
                'description' => 'Provides employee training and skill development.',
                'budget' => 45000.00,
                'status' => true,
            ],
            [
                'department_name' => 'Operations',
                'department_code' => 'OPS',
                'description' => 'Oversees daily business operations and logistics.',
                'budget' => 110000.00,
                'status' => true,
            ],
            [
                'department_name' => 'Customer Service',
                'department_code' => 'CSR',
                'description' => 'Handles customer support and satisfaction.',
                'budget' => 70000.00,
                'status' => true,
            ],
            [
                'department_name' => 'Legal',
                'department_code' => 'LGL',
                'description' => 'Provides legal advice and contract management.',
                'budget' => 95000.00,
                'status' => true,
            ],
            [
                'department_name' => 'Marketing',
                'department_code' => 'MKT',
                'description' => 'Promotes brand visibility and generates leads.',
                'budget' => 130000.00,
                'status' => true,
            ],
           
            [
                'department_name' => 'Quality Assurance',
                'department_code' => 'QA',
                'description' => 'Ensures product and service quality standards.',
                'budget' => 65000.00,
                'status' => true,
            ],
        ];


        foreach ($departments as $department) {

            Department::insert($department);
        }
    }
}
