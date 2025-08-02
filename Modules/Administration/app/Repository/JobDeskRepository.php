<?php

namespace Modules\Administration\app\Repository;

use Inertia\Inertia;
use Modules\Administration\Models\Department;
use Modules\Administration\Models\JobDesk;

class JobDeskRepository
{
    public function index()
    {

        return Inertia::render("Administration::JobDesk/Index");
    }

    public function create()
    {
        $departments = Department::query()
            ->select('department_name')->get();
            
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
        return Inertia::render("Administration::JobDesk/Edit");
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
