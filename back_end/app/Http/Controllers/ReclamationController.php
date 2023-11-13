<?php

namespace App\Http\Controllers;
use App\Models\Reclamation;
use Illuminate\Http\Request;
use Validator;

class ReclamationController extends Controller
{
    public function GetReclamations($id=null)
    {
        $id ?  $Reclamations = Reclamation::findOrFail($id) : $Reclamations = Reclamation::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 200,
            'Reclamations'=>$Reclamations
        ]);
    }
    public function AddReclamation(Request $req){

        $rules = array(
                'title'=>"required",
                'sujet'=>"required",
                'discription'=>"required",
                'reclamedBy'=>"required",
                'email'=>"required"
        );
        $validator = Validator::make($req->all(),$rules);
        
        if($validator->fails()){
            return $validator->errors();
        }else{
            $Reclamation = new Reclamation;
            $Reclamation->title = $req->title;
            $Reclamation->sujet = $req->sujet;
            $Reclamation->discription = $req->discription;
            $Reclamation->reclamedBy = $req->reclamedBy;
            $Reclamation->email = $req->email;
            $result = $Reclamation->save();
            if($result){
                return response()->json([
                    'status' => 200,
                    'result'=>'your reclamation has added succesfuly'
                ]);
            }else{
                return ['result'=>'operation failled'];
            }
        }
       
        }
        public function UpdateReclamation(Request $req ){
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
        public function SearchReclamation( $name ){
        return Reclamation::where('title','like','%'.$name.'%')->get(); 
       
            }
        public function DeleteReclamation( $id ){
            $Reclamation =  Reclamation::findOrFail($id);
            $result = $Reclamation->delete();
            if($result){
                return ['result'=>'data has deleted succesfuly'];
            }else{
                return ['result'=>'operation failled'];
            }
        
        }
}
