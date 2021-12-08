<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\SignUpRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','signup']]);
    }


    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email or Password is Wrong'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function signup(SignUpRequest $request)
    {
         $user = User::create($request->all());

         return $this->login($request);

    }


    public function me()
    {
        return response()->json(auth()->user());
    }


    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }


    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }


    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'user' => auth()->user()->name,
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
