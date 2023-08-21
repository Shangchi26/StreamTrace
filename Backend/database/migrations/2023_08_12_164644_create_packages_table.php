<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->integer('price');
            $table->integer('count');
            $table->timestamps();
        });
        $this->insertPackageData();

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('packages');
    }
    protected function insertPackageData()
    {
        $sampleData = [
            [
                'name' => 'Silver',
                'price' => 29,
                'count' => 25,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Gold',
                'price' => 59,
                'count' => 50,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Diamond',
                'price' => 99,
                'count' => 100,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('packages')->insert($sampleData);
    }
}
