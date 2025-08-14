<?php

namespace Modules\Employee\app\Repositories;

use Inertia\Inertia;
use Modules\Administration\Models\Shift;
use Modules\Employee\Models\Employee;
use Modules\Employee\Models\EmployeeShift;

class EmployeeShiftsRepository
{
    public function index()
    {   
        $employee = Employee::query()->select('id','first_name')->get();
        $shifts =  Shift::query()->select('id','shift_name')->get();

        return Inertia::render('Employee::EmployeeShift/Index', [
            'employee' => $employee,
            'shifts' => $shifts,
        ]);
        return Inertia::render('Employee::EmployeeShift/Index');
    }

    public function store(array $data)
    {
        EmployeeShift::create($data);
    }

    public function update(int $id, array $data)
    {
        EmployeeShift::findOrFail($id)->update($data);
    }

    public function destroy($id)
    {
       $employeeShift =  EmployeeShift::findOrFail($id);

        if($employeeShift->id)
        {
            $employeeShift->delete();
        }
        return $employeeShift;
    }
}
