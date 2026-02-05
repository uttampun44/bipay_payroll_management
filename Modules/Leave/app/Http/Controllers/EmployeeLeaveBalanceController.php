<?php

namespace Modules\Leave\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Leave\app\Repositories\EmployeeLeaveBalanceRepositories;

class EmployeeLeaveBalanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $employeeLeaveBalanceRepository;

    public function __construct(EmployeeLeaveBalanceRepositories $employeeLeaveBalanceRepository)
    {
        $this->employeeLeaveBalanceRepository = $employeeLeaveBalanceRepository;
    }
    public function index()
    {
        return $this->employeeLeaveBalanceRepository->index();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       return $this->employeeLeaveBalanceRepository->create();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {}

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('leave::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('leave::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
