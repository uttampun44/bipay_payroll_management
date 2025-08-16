<?php

namespace Modules\Employee\app\Repositories;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Administration\Models\Shift;
use Modules\Employee\Models\Employee;
use Modules\Employee\Models\EmployeeShift;

class EmployeeShiftsRepository
{
    public function index(Request $request)
    {
        $search = $request->get('search');

        $employee = Employee::query()->select('id', 'employee_code')
            ->when($search, function ($query) use ($search) {
                $query->where('employee_code', 'like', "%{$search}%");
            }, function ($query) {
                $query->limit(50);
            })->orderBy('employee_code', 'asc')
            ->limit(5)
            ->get();

        $shifts =  Shift::query()->select('id', 'shift_name')->get();
        $employeShifts = EmployeeShift::with(['employee:id,employee_code,first_name,last_name,image', 'shift:id,shift_name'])
            ->where(function ($query) use ($search) {
                $query->where('start_date', 'like', "%{$search}%")
                    ->orWhere('end_date', 'like', "%{$search}%");
            })
            ->orWhereHas('employee', function ($query) use ($search) {
                $query->where('employee_code', 'like', "%{$search}%")
                    ->orWhere('first_name', 'like', "%{$search}%")
                    ->orWhere('last_name', 'like', "%{$search}%");
            })
            ->orWhereHas('shift', function ($query) use ($search) {
                $query->where('shift_name', 'like', "%{$search}%");
            })->paginate(15)->withQueryString();

        return Inertia::render('Employee::EmployeeShift/Index', [
            'employee' => $employee,
            'shifts' => $shifts,
            'filters' => [
                'search' => $search,
            ],
            'employeeShifts' => $employeShifts,
        ]);
    }

    public function store(array $data)
    {
        EmployeeShift::create($data);
    }
}
