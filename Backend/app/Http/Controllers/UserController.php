<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'FullName' => 'required|string|max:100',
            'Phone' => 'required|unique:users|numeric',
            'Email' => 'required|email|unique:users',
            'UserName' => 'required|unique:users|string|max:100',
            'password' => 'required|string|min:6',
            'role' => 'string',
            'count' => 'interger'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $user = new User();
        $user->FullName = $request->input('FullName');
        $user->Phone = $request->input('Phone');
        $user->Email = $request->input('Email');
        $user->UserName = $request->input('UserName');
        $user->password = Hash::make($request->input('password'));
        $user->role = $request->input('role', 'User');
        $user->count = $request->input('count', 0);

        $user->save();

        return $user;
    }

    public function login(Request $request)
    {
        $user = User::where(function ($query) use ($request) {
            $query->Where('UserName', $request->UserName);
        })->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        return $user;

    }

    public function updateRoleToCreator($userId)
    {
        $user = User::find($userId);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->role = 'creator';
        $user->save();

        return response()->json(['message' => 'User role updated to creator']);
    }
}
