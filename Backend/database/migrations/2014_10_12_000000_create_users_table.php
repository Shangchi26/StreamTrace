<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('FullName', 100);
            $table->string('Phone', 20);
            $table->string('Email', 100)->unique();
            $table->string('UserName', 100)->unique();
            $table->string('password', 100);
            $table->string('role')->default('user'); // Giá trị mặc định là 'user'
            $table->integer('count')->default(0);
            $table->timestamps();
        });
        $this->insertUserData();

    }
    protected function insertUserData()
    {
        $sampleData = [
            [
                'FullName' => 'UserAccount',
                'Phone' => '0123456789',
                'Email' => 'user@gmail.com',
                'UserName' => 'User123@',
                'password' => 'User123@',
                'role' => 'user',
                'count' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'FullName' => 'ProviderAccount',
                'Phone' => '0123456788',
                'Email' => 'provider@gmail.com',
                'UserName' => 'Provider123@',
                'password' => 'Provider123@',
                'role' => 'provider',
                'count' => 10,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'FullName' => 'AdminAccount',
                'Phone' => '0123456787',
                'Email' => 'admin@gmail.com',
                'UserName' => 'Admin123@',
                'password' => 'Admin123@',
                'role' => 'admin',
                'count' => 100,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('users')->insert($sampleData);
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
