<?php

namespace Modules\Administration\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Modules\Administration\app\Repository\DepatmentRepository;
use Modules\Administration\Http\Requests\DepartmentRequest;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    protected $departmentRepository;
    
    public function __construct(DepatmentRepository $departmentRepository)
    {
        $this->departmentRepository = $departmentRepository;
    }
    public function index()
    {
       return $this->departmentRepository->index();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('administration::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DepartmentRequest $request) 
    {
         try {
            $this->departmentRepository->store($request->all());
            return to_route('department.index')->with('success', 'Department created successfully!');
         } catch (\Throwable $th) {
            Log::error($th->getMessage());
         }
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('administration::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('administration::edit');
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
