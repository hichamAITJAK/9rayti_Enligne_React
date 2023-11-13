<?php

namespace App\Http\Controllers;
use App\Models\Paragraphe;
use Illuminate\Http\Request;

class ParagraphController extends Controller
{
    public function GetParagraphs()
    {
        $Paragraphes = Paragraphe::all();
        return $Paragraphes;
        // return response()->json([
        //     'status' => 200,
        //     'Paragraphes'=>$Paragraphes
        // ]);
    }
}
