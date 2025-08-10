<?php

namespace Modules\Administration\app\Repository;

use Inertia\Inertia;
use Modules\Administration\Models\Shift;

class ShiftRepository
{
    public function index()
    {
        $shifts =  Shift::query()
                      ->select('shift_name', 'shift_code', 'start_time', 'end_time', 
                                         'break_duration', 'working_hours', 'overtime_rate', 'night_shift_allowance', 
                                  'weekend_rate', 'status')->get();

        return Inertia::render('Administration::Shift/Index', [
            'shifts' => $shifts
        ]);
    }
    
    public function store(array $data)
    {
        Shift::create($data);
    }

    public function update(int $id, array $data)
    {
        $shift = Shift::findOrFail($id);

        if (!$shift->id) {
            return throw new \Exception("Shift not found");
        }

        $shift->update($data);
    }

    public function destroy(int $id)
    {
        $shift = Shift::findOrFail($id);

        if (!$shift->id) {
            return throw new \Exception("Shift not found");
        }

        $shift->delete();
    }
}