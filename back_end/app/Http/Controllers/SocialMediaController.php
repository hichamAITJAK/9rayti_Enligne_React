<?php

namespace App\Http\Controllers;
use App\Models\Social_media;
use Illuminate\Http\Request;

class SocialMediaController extends Controller
{
    public function GetSocialMedias($id=null)
    {
        $id ?  $SocialMedias = Social_media::where('user_id', $id)->first() : $SocialMedias = Social_media::all();
        return response()->json([
            'status' => 200,
            'SocialMedias'=>$SocialMedias
        ]);
    }
}
