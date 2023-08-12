<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceProviderTable extends Migration
{
    public function up()
    {
        Schema::create('ServiceProvider', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('userID');
            $table->string('logo');
            $table->string('URL', 250);
            $table->string('subcriptionType', 100);
            $table->integer('subcriptionPrice');
            $table->boolean('status');
            $table->timestamps();

            $table->foreign('userID')->references('id')->on('Users');
        });
    }

    public function down()
    {
        Schema::dropIfExists('ServiceProvider');
    }
}
