<?php

namespace Modules\Employee\app\Repositories;

use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Modules\Administration\app\Models\Department;
use Modules\Administration\app\Models\JobDesk;
use Modules\Employee\Models\Employee;

class EmployeeRepository
{
    public function index()
    {
        return Inertia::render('Employee::Employee/Index');
    }
    
    public function create()
    {
        $jobDesks = JobDesk::query()->select('id', 'job_title')->get();
        $departments = Department::query()->select('id', 'department_name')->get();
        return Inertia::render('Employee::Employee/Create', [
               'jobDesks' => $jobDesks,
            'departments' => $departments,
        ]);
    }

    public function store(array $data)
    {    
        if($data['image'] && $data['image']->hasFile('image'))
        {    
            $data['image'] = Storage::putFile('employee-images', $data['image']);
        }
        
        $employee = Employee::create($data);
        return $employee;
    }
    
    public function edit()
    {
        
    }
    public function update(Employee $employee, array $data)
    {
        $employee->update($data);
        return $employee;
    }
}