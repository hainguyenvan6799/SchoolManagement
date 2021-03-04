<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Imports\UsersImport;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $file = $request->file();
        // Excel::import(new UsersImport, $request->file('file'));
        $file = $request->file('file')->store('import');
        $import = new UsersImport();
        
        $import->import($file);
        $failures = $import->failures();
     
            // foreach ($failures as $failure) {
            // // print_r($failure->row()); // row that went wrong
            // // print_r($failure->attribute()); // either heading key (if using heading row concern) or column index
            // // print_r($failure->errors()); // Actual error messages from Laravel validator
            // // print_r($failure->values()); // The values of the row that has failed.
            // echo "You have an error on row " . $failure->row() . ". ";
            //     foreach($failure->errors() as $err)
            //     {
            //         echo $err;
            //     }
            // }
        return $failures;
        // return $errors;
        // return $import->errors();
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
