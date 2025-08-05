<?php

namespace Modules\Administration\app\Repository;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ShiftRepository
{
    public function index()
    {
        return Inertia::render('Administration::Shift/Index');
    }
    
}