<?php

namespace Modules\Employee\app\Repositories;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Modules\Administration\app\Models\Department;
use Modules\Administration\app\Models\JobDesk;
use Modules\Employee\Models\Employee;
use Illuminate\Support\Str;

class EmployeeRepository
{
    public function index(Request $request)
    {
         $search = $request->get('search');

        $employees = Employee::query()
            ->with(['department:id,department_name', 'jobDesk:id,job_title'])
            ->select([
                'id',
                'employee_code',
                'first_name',
                'last_name',
                'email',
                'gender',
                'phone',
                'address',
                'hire_date',
                'department_id',
                'job_desk_id',
                'employment_status',
                'basic_salary',
                'image'
            ])
            ->when($search, function ($query, $search) {
                return $query->where(function ($query) use ($search) {
                    $query->whereAny([
                        'employee_code',
                        'first_name',
                        'last_name',
                        'email',
                        'phone',
                        'address',
                        'hire_date'
                    ], 'like', "%{$search}%")
                        ->orWhereHas('department', function ($departmentQuery) use ($search) {
                            $departmentQuery->where('department_name', 'like', "%{$search}%");
                        });
                });
            })->paginate(15)->withQueryString();

        return Inertia::render('Employee::Employee/Index', [
            'employees' => $employees,
            'filter' => [
                'search' => $search
            ]
        ]);
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
        if ($data['image']) {
            $img_ext = $data['image']->getClientOriginalExtension();
            $uuidFilename = Str::uuid() . '.' . $img_ext;
            $path = $data['image']->storeAs('app/public/employee', $uuidFilename);
            $data['image'] = $path;
        }

        Employee::create($data);
    }

    public function edit($id)
    {
        $employee = Employee::find($id);
        $deparment = Department::query()->select('id', 'department_name')->get();
        $jobDesks = JobDesk::query()->select('id', 'job_title')->get();

        return Inertia::render('Employee::Employee/Edit', [
            'employee' => $employee,
            'departments' => $deparment,
            'jobDesks' => $jobDesks,
        ]);
    }
    public function update(int $id, array $data)
    {
        $employee = Employee::find($id);

        if (!$employee->id) {
            return throw new \Exception("Employee not found");
        }

        if($data['password']) {
            $employee->password = Hash::make($data['password']);
        }

        $employee->update($data);
    }

    public function destroy($id)
    {
        $employee = Employee::find($id);
        $employee->delete();
    }
}
