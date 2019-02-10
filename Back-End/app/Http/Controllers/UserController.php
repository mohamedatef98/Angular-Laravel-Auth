<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\{Auth, Validator};

class UserController extends Controller
{
    public function login(LoginRequest $request){
        
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = auth()->user();
            $res = $user->createToken('MyApp')-> accessToken;
            return response()->json($res);
        } 
        
        else{ 
            return response()->json(['error'=>'Wrong Email Or Password'], 401);
        } 
    }

    public function signup(SignupRequest $request){
        
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email', 
            'password' => 'required'
        ]);

        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }

        $input = $request->all(); 
            $input['password'] = bcrypt($input['password']); 
            $user = \App\User::create($input);
            $token = $user->createToken('MyApp');

//            $res = array('name'=> $token->accessToken['name'], 'token'=>$token->accessToken['token'], 'expires_at'=>$token->token['expires_at']);

        return response()->json($token);
    }

    public function logout(Request $request){

    }
}
