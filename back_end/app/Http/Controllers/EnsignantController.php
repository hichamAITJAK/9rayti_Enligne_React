<?php

namespace App\Http\Controllers;
use App\Models\Ensignant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;

class EnsignantController extends Controller
{
    public function GetEnsignants($id=null)
    {
        $id ?  $Ensignants = Ensignant::findOrFail($id) : $Ensignants = Ensignant::all();
        
        return response()->json([
            'status' => 200,
            'Ensignants'=>$Ensignants
        ]);
    }
    public function AddEnsignant(Request $req){

        $rules = array(
                'name'=>"required",
                'spesialite'=>"required",
                'email'=>"required|min:10",
                'password'=>"required|min:8|max:20"
        );
        $validator = Validator::make($req->all(),$rules);
        
        if($validator->fails()){
            return $validator->errors();
        }else{
            $Ensignant = new Ensignant;
            $Ensignant->nomComplet = $req->name;            
            $Ensignant->Spesialisation = $req->spesialite;
            $Ensignant->email = $req->email;
            $Ensignant->password = $req->password;
            $result = $Ensignant->save();
            if($result){
                return response()->json(['status' => 200,'result'=>'data has added succesfuly']);
            }else{
                return response()->json(['status' => 500,'result'=>'operation failled']);
            }
        }
       
        }
        public function UpdateEnsignant(Request $req ){
            $Ensignant =  Ensignant::findOrFail($req->id);
            $Ensignant->nomComplet = $req->name;
            $Ensignant->Spesialisation = $req->spesialite;
            $Ensignant->email = $req->email;
            $Ensignant->password = $req->password;
            $result = $Ensignant->update();
            if($result){
                return ['result'=>'data has updated succesfuly'];
            }else{
                return ['result'=>'operation failled'];
            }
        
        }
        public function EnsignantLogin(Request $req){

            $user = Ensignant::where('email', $req->email)->where('password', $req->password)->first();
            if (!$user) {
                return response()->json(['status' => 500,'result' => 'User not found or Password is incorrect']);
            }else{
                return response()->json(['status' => 200, 'result' => $user]);
            }
            }
    
        public function SearchEnsignant( Request $req ){
        return Ensignant::where('email','like',$req->email  )->where('password','like',$req->password  )->get(); 
       
            }
        public function DeleteEnsignant( $id ){
            $Ensignant =  Ensignant::findOrFail($id);
            $result = $Ensignant->delete();
            if($result){
                return ['result'=>'data has deleted succesfuly'];
            }else{
                return ['result'=>'operation failled'];
            }
        
        }
}
