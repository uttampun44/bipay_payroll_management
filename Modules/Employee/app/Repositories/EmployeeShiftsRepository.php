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
                          $query->where('employee_code', 'like', "%{$search}%" );
                      }, function ($query) {
                          $query->limit(50);
                      })->orderBy('employee_code', 'asc')
                      ->limit(5)
                      ->get();
                             
        $shifts =  Shift::query()->select('id','shift_name')->get();

        $employeShifts = EmployeeShift::with(['employee:id,employee_code,first_name,last_name', 'shift:id,shift_name'])
                            ->when($search, function ($query) use ($search) {
                                 $query->whereAny([
                                    'employee_code',
                                    'first_name',
                                    'last_name',
                                    'start_date',
                                    'end_date',
                                 ], 'like', "%{$search}%")
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
