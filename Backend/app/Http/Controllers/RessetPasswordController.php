<?php

namespace App\Http\Controllers;

use App\Mail\ResetPaswordMail;
use App\Models\User;



use Illuminate\Http\Request;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class RessetPasswordController extends Controller
{
    public function sendEmail(Request $request){
       if(!$this->validateEmail($request->email)){
            return $this->failedResponse();
       }

       $this->send($request->email);
        return $this->successResponse();
    }

    public function send($email){
        $token = $this->createToken($email);
        Mail::to($email)->send(new ResetPaswordMail($token));
    }
    public function createToken($email){
        $oldToken = DB::table('password_resets')->where('email',$email)->first();
        if($oldToken){
            return $oldToken->token;
        }
        $token = Str::random(60);
        $this->saveToken($token,$email);
        return $token;

    }
    public function saveToken($token,$email){
        DB::table('password_resets')->insert([
            'email'=>$email,
            'token'=>$token,
            'created_at'=>Carbon::now()
        ]);
    }
    public function successResponse(){

        return response()->json([
            'data'=>'Reset Email Sended'
        ], Response::HTTP_OK);
    }

    public function failedResponse(){
        return response()->json([
            'error'=>'Email dosent Exist'
        ], Response::HTTP_NOT_FOUND);
    }

    public function validateEmail($email){
        return !!User::where('email',$email)->first();
    }




}
