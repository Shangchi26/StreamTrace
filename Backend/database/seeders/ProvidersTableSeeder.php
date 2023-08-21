<?php

namespace Database\Seeders;

use App\Helpers\PackageSingleton;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvidersTableSeeder extends Seeder
{
    public function run()
    {
        $creatorUsers = DB::table('users')->where('role', 'creator')->pluck('id');

        $packageID = PackageSingleton::getInstance()->getPackageID();

        foreach ($creatorUsers as $userID) {
            DB::table('providers')->insert([
                'name' => 'Provider Name',
                'logo' => 'logo.jpg',
                'userID' => $userID,
                'packageID' => $packageID,
                'count' => 0,
                // Thêm các cột khác tùy theo cấu trúc bảng của bạn
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}

