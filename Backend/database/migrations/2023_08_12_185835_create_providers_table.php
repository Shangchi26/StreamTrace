<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProvidersTable extends Migration
{
    public function up()
    {
        Schema::create('providers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('logo');
            $table->unsignedBigInteger('userID');
            $table->unsignedBigInteger('packageID');
            $table->timestamps();

            // Define foreign key constraints
            $table->foreign('userID')->references('id')->on('users');
            $table->foreign('packageID')->references('id')->on('packages');
        });
    }

    public function down()
    {
        Schema::dropIfExists('providers');
    }
}

