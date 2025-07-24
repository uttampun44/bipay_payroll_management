<?php 

namespace Modules\Employee\app\Repositories;

use App\Models\Appointment;
use Inertia\Inertia;

class AppointmentRepository
{
    public function index()
    {
        return Inertia::render("Employee::Appointment/Index");
    }
}