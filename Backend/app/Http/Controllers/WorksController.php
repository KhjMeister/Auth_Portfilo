<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\works;
use App\Models\github;

class WorksController extends Controller
{
    public function getAllWorks()
    {
    	return response()->json(works::all(),200);
    }
    public function getCWorks()
    {
    	return response()->json(works::where('status','1')->get(),200);
    }
    public function getLWorks()
    {
    	return response()->json(works::where('status','0')->get(),200);
    }
    

    public function getgithubs()
    {
        return response()->json(github::all(),200);
    }
}
