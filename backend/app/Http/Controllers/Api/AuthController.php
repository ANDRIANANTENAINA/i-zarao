<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required',
        'email' => 'required|email|unique:users',
        'matricule' => 'required|unique:users',
        'role' => 'required',
        'state' => 'required',
        'password' => 'required|min:6',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    $user = User::create([
        'name' => $request->input('name'),
        'lastname' => $request->input('lastname'),
        'email' => $request->input('email'),
        'matricule' => $request->input('matricule'),
        'role' => $request->input('role'),
        'state' => $request->input('state'),
        'password' => bcrypt($request->input('password')),
    ]);

    $token = $user->createToken('auth-token')->accessToken;

    return response()->json(['token' => $token, 'status'],200);
}

public function login(Request $request)
{
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $user = $request->user();
        $token = $user->createToken('auth-token')->accessToken;
        return response()->json(['token' => $token], 200);
    }

    return response()->json(['error' => 'Invalid credentials'], 401);
}

}
