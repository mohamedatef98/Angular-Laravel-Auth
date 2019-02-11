<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class CarController extends Controller
{
    public function index(){
        return \App\Car::get();
    }

    public function show(Request $request, $id){
        $car = \App\Car::find($id);

        if($car->count > 0)
            return $request->json($car);
        return $request->json(['notFound'=>true], 404);
    }

    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            'make'=> 'required',
            'model'=>'required',
            'year'=>'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $user = JWTAuth::parseToken()->toUser();

        $car = new \App\Car;

        $car->make = $request->input('make');

        $car->model = $request->input('model');

        $car->year = $request->input('year');

        $car->user_id = $user->id;

        $car->save();

        return response()->json(["message"=> ['Car Added']], 200);
    }

    public function update(Request $request, Car $car){
        $validator = Validator::make($request->all(), [
            'make'=> 'required',
            'model'=>'required',
            'year'=>'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $user = JWTAuth::parseToken()->toUser();

        $user_id = $car->user_id;

        if($user->id != $user_id)
            return response()->json(['error'=>['Not Allowed']], 400);

        $car->make = $request->input('make');

        $car->model = $request->input('model');

        $car->year = $request->input('year');

        $car->save();

        return response()->json(["message"=> ['Car Updated']], 200);
    }
}
