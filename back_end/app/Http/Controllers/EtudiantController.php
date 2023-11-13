<?php

namespace App\Http\Controllers;
use App\Models\Etudiant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class EtudiantController extends Controller
{
    public function GetEtudiants($id=null)
    {
       $id ?  $Etudiants = Etudiant::findOrFail($id) : $Etudiants = Etudiant::all();

        return response()->json([
            'status' => 200,
            'Etudiants'=>$Etudiants
        ]);
    }
    public function EtudiantLogin(Request $request)
        {
            
        $user = Etudiant::where('email', $request->email)->where('password', $request->password)->first();
        if (!$user) {
            return response()->json(['status' => 500,'result' => 'User not found or Password is incorrect']);
        }else{
            $token = $user->createToken('Token')->plainTextToken;
            return response()->json(['status' => 200, 'result' => $user,'token'=>$token]);
        }
        }
    public function AddEtudiant(Request $req){

        $rules = array(
                'name'=>"required",
                'email'=>"required|min:10",
                'password'=>"required|min:8|max:20"
        );
        $validator = Validator::make($req->all(),$rules);
        
        if($validator->fails()){
            return $validator->errors();
        }else{
            $Etudiant = new Etudiant;
            $Etudiant->nomComplet = $req->name;
            $Etudiant->email = $req->email;
            $Etudiant->password = $req->password;
            $result = $Etudiant->save();
            if($result){
                return [
                    'status' => 200,
                    'result'=>'data has added succesfuly',
                ];
            }else{
                return ['result'=>'operation failled'];
            }
        }
       
        }
        public function UpdateEtudiant(Request $req ){
            $Etudiant =  Etudiant::findOrFail($req->id);
            $Etudiant->nomComplet = $req->name;
            $Etudiant->email = $req->email;
            $Etudiant->password = $req->password;
            $result = $Etudiant->update();
            if($result){
                return response()->json([
                    'status' => 200,
                    'result'=>'data has updated succesfuly'
                ]);
            }else{
                
                return ['result'=>'operation failled'];
            }
        
        }
        public function SearchEtudiant( $name ){
        return Etudiant::where('nomComplet','like','%'.$name.'%')->get(); 
       
            }
        public function DeleteEtudiant( $id ){
            $Etudiant =  Etudiant::findOrFail($id);
            $result = $Etudiant->delete();
            if($result){
                return ['result'=>'data has deleted succesfuly'];
            }else{
                return ['result'=>'operation failled'];
            }
        
        }
}




