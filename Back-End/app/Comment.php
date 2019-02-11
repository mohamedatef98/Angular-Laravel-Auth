<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $guarded = [];

    public function car(){
        return $this->belongsTo("\App\Car");
    }

    public function user(){
        return $this->belongsTo('\App\User');
    }
}
