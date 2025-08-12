<?php

namespace Modules\Administration\app\Repository;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Administration\app\Models\Department;
use Modules\Administration\app\Models\JobDesk;

class JobDeskRepository
{
    public function index(Request $request)
    {    
        $search = $request->get('search');
        // load the relationship with specific columns and no extra space
         $jobDesks = JobDesk::query()
                          ->with(['department:id,department_name'])
                          ->select(['id', 'job_title', 'job_code', 'job_description',
                           'minimum_salary', 'maximum_salary', 'job_requirements', 
                           'job_responsibilities', 'department_id'])
                           ->when($search, function ($query, $search) {
                                return $query->where(function ($query) use ($search) {
                                    $query->whereAny([
                                       'job_title', 
                                      'job_code', 
                                      'job_description',
                                      'job_requirements', 
                                      'job_responsibilities'
                                    ], 'like', "%{$search}%")
                                    ->orWhereHas('department', function ($departmentQuery) use ($search) {
                                      $departmentQuery->where('department_name', 'like', "%{$search}%");
                                  });
                              });
                            })
                           ->paginate(15)->withQueryString();
        
        return Inertia::render("Administration::JobDesk/Index", [
            'jobDesks' => $jobDesks,
            'filter' => [
                'search' => $search
            ]
        ]);
    }

    public function create()
    {
        $departments = Department::query()
            ->select('id', 'department_name')->get();
            
        return Inertia::render("Administration::JobDesk/Create", [
            'departments' => $departments,
        ]);
    }

    public function store(array $data)
    {
        JobDesk::create($data);
    }

    public function edit(int $id)
    {
         $departments = Department::query()
            ->select('id', 'department_name')->get();

        $jobDesk = JobDesk::with(['department:id,department_name'])->findOrFail($id);

        return Inertia::render("Administration::JobDesk/Edit", [
            'departments' => $departments,
            'jobDesk' => $jobDesk,
        ]);

    }

    public function update(int $id, array $data)
    {
        $jobDesk = JobDesk::findOrFail($id);

        if (!$jobDesk->id) {
            return throw new \Exception("Job Desk not found");
        }

        $jobDesk->update($data);
    }

    public function destroy(int $id)
    {
        $jobDesk = JobDesk::findOrFail($id);

        if (!$jobDesk->id) {
            return throw new \Exception("Job Desk not found");
        }

        $jobDesk->delete();
    }
}
