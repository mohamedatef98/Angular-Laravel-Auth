<?php

namespace App\Http\Middleware;

use Closure;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS, HEAD');
        header("Access-Control-Allow-Headers: *");

        return $next($request);
    }
}
