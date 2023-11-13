<?php

namespace App\Http\Controllers;
use App\Models\Categorie;
use Illuminate\Http\Request;
use Validator;

class CategorieController extends Controller
{
    public function GetCategories($id=null)
    {
        $id ? $Categories = Categorie::findOrFail($id) : $Categories = Categorie::all();
        return response()->json([
            'status' => 200,
            'categories'=>$Categories
        ]);
    }


    public function AddCategorie(Request $req){

        $rules = array(
                'cat_title'=>"required|min:2|max:100"
        );
        $validator = Validator::make($req->all(),$rules);
        
        if($validator->fails()){
            return $validator->errors();
        }else{
            $categorie = new Categorie;
            $categorie->categorie_title = $req->cat_title;
            $result = $categorie->save();
            if($result){
                return ['result'=>'data has added succesfuly'];
            }else{
                return ['result'=>'operation failled'];
            }
        }
       
    }
    public function UpdateCategorie(Request $req ){
        $categorie =  Categorie::findOrFail($req->cat_id);
        $categorie->categorie_title = $req->cat_title;
        $result = $categorie->save();
        if($result){
            return ['result'=>'data has updated succesfuly'];
        }else{
            return ['result'=>'operation failled'];
        }
       
    }
    public function SearchCategorie( $name ){
       return Categorie::where('categorie_title','like','%'.$name.'%')->get();
        
        
       
    }
    public function DeleteCategorie( $id ){
        $categorie =  Categorie::findOrFail($id);
        $result = $categorie->delete();
        if($result){
            return ['result'=>'data has deleted succesfuly'];
        }else{
            return ['result'=>'operation failled'];
        }
       
    }

   
}
