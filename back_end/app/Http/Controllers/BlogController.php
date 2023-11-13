<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    
    public function GetBlogs($id=null)
    {
        $id ? $Blogs = Blog::findOrFail($id) : $Blogs = Blog::orderBy('id_blog', 'desc')->get();
        
        return response()->json([
            'status' => 200,
            'Blogs'=>$Blogs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules = array(
            'title'=>"required",
            'sujet'=>"required",
            'discription'=>"required|min:100",
            'reclamer'=>"required",
            'reclamerContre'=>"required"
    );
    $validator = Validator::make($req->all(),$rules);
    
    if($validator->fails()){
        return $validator->errors();
    }else{
        $Reclamation = new Reclamation;
        $Reclamation->title = $req->title;
        $Reclamation->sujet = $req->sujet;
        $Reclamation->discription = $req->discription;
        $Reclamation->reclamedBy = $req->reclamer;
        $Reclamation->reclamerContre = $req->reclamerContre;
        $result = $Reclamation->save();
        if($result){
            return ['result'=>'data has added succesfuly'];
        }else{
            return ['result'=>'operation failled'];
        }
    }
   
    }

    /**
     * Display the specified resource.
     */
    public function show($name)
    {
        return Reclamation::where('title','like','%'.$name.'%')->get(); 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        $Reclamation =  Reclamation::findOrFail($req->id);
        $Reclamation->title = $req->title;
        $Reclamation->sujet = $req->sujet;
        $Reclamation->discription = $req->discription;
        $Reclamation->reclamedBy = $req->reclamerPar;
        $Reclamation->reclamerContre = $req->reclamerContre;
        $result = $Reclamation->update();
        if($result){
            return ['result'=>'data has updated succesfuly'];
        }else{
            return ['result'=>'operation failled'];
        }
    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $Reclamation =  Reclamation::findOrFail($id);
        $result = $Reclamation->delete();
        if($result){
            return ['result'=>'data has deleted succesfuly'];
        }else{
            return ['result'=>'operation failled'];
        }
    
    }
}
