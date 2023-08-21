<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use App\Models\User;
use Illuminate\Http\Request;

class ProviderController extends Controller
{
    public function createProvidersFromUsers(Request $request)
    {
        // Truy vấn các người dùng có vai trò 'provider'
        $providers = User::where('role', 'provider')->get();

        // Thêm các bản ghi vào bảng 'providers'
        foreach ($providers as $provider) {
            Provider::create([
                'name' => $provider->FullName,
                'userID' => $provider->id,
                'packageID' => 1, // Thay thế bằng packageID mặc định nếu cần
            ]);
        }

        return response()->json(['message' => 'Providers created successfully']);
    }
}
