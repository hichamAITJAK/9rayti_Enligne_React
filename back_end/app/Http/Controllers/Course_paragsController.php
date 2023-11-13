<?php

namespace App\Http\Controllers;
use App\Models\course_parags;
use Illuminate\Http\Request;

class Course_paragsController extends Controller
{
    public function GetCourseParags()
    {
        $course_parags = course_parags::all();
        return $course_parags;
        // return response()->json([
        //     'status' => 200,
        //     'course_parags'=>$course_parags
        // ]);
    }
}
