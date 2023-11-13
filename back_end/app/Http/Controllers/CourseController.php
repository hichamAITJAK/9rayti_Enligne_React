<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function GetCourses($id=null)
        {
            $id ? $Courses=Course::findOrFail($id) : $Courses=Course::all();
                        
            return response()->json([
                'status' => 200,
                'courses'=>$Courses
            ]);
        }
        
    
  
}
