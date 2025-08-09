<?php

namespace Modules\Administration\app\Repository;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Administration\Models\Shift;

class ShiftRepository
{
    public function index()
    {
        return Inertia::render('Administration::Shift/Index');
    }
    
    public function store(array $data)
    {
       return Shift::create($data);
    }
}