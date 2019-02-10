<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
