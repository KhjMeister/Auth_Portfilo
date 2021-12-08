<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordRequest;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class ChangePassword extends Controller
{
    public function resetPassword(ChangePasswordRequest $request){
        return $this->getPasswordResetTableRow($request)->count()>0 ? $this->changePassword($request) : $this->tokenNotFoundResponse();
    }

    private function getPasswordResetTableRow($request){
        return DB::table('password_resets')->where(['email'=>$request->email,'token'=>$request->resetToken]);
    }
    private function tokenNotFoundResponse(){
        return response()->json(['error'=>'Email or Token is Not Correct'], Response::HTTP_UNPROCESSABLE_ENTITY);
    }
    private function changePassword($request){
        $user = User::whereEmail($request->email)->first();
        $user->update(['password'=>$request->password]);
        $this->getPasswordResetTableRow($request)->delete();
        return response()->json(['data'=>'your password is changed'], Response::HTTP_CREATED);
    }
}
