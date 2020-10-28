<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;

class ChangePasswordController extends Controller
{
    public function process(ChangePasswordRequest $request){
        return $this->getPasswordResetTableRaw($request)->count()>0? $this->changePassword($request)
        :$this->tokenNotFoundResponse();
    }

    private function getPasswordResetTableRaw($request){
        return DB::table('password_resets')->where(['email' => $request->email,'token'
        =>$request->resetToken]);
    }

    private function tokenNotFoundResponse(){
        return response()->json(['error' => 'Token and Email is incorrect'],response::HTTP_UNPROCESSABLE_ENTITY);
    }

    private function changePassword($request){
        $user = User::whereEmail($request->email)->first();
        $user->update(['password'=>$request->password]);
        $this->getPasswordResetTableRaw($request)->delete();
        return response()->json(['data'=>'password Successfully Changed'],response::HTTP_CREATED);
    }

}
