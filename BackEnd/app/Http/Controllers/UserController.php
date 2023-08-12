<?php

    namespace App\Http\Controllers;

    use App\User;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Hash;
    use Tymon\JWTAuth\Exceptions\JWTException;
    use Tymon\JWTAuth\Facades\JWTAuth;

    class UserController extends Controller
    {
        public function register(Request $request)
        {
            $data = $request->only('FullName', 'Phone', 'Email', 'UserName', 'password', 'role');

            $user = new User([
                'FullName' => $data['FullName'],
                'Phone' => $data['Phone'],
                'Email' => $data['Email'],
                'UserName' => $data['UserName'],
                'password' => Hash::make($data['password']),
                'role' => $data['role'],
            ]);

            $user->save();

            $token = JWTAuth::fromUser($user);

            return response()->json(['message' => 'User registered successfully', 'token' => $token], 201);
        }

        public function login(Request $request)
        {
            $data = $request->only('UserName', 'password');

            try {
                $token = JWTAuth::attempt($data);

                if (!$token) {
                    return response()->json(['error' => 'Invalid credentials'], 401);
                }
            } catch (JWTException $e) {
                return response()->json(['error' => 'Could not create token'], 500);
            }

            return response()->json(['token' => $token], 200);
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
