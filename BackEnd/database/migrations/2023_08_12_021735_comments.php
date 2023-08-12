<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    public function up()
    {
        Schema::create('Comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('userID');
            $table->unsignedBigInteger('serviceID');
            $table->string('text');
            $table->timestamps();

            $table->foreign('userID')->references('id')->on('Users');
            $table->foreign('serviceID')->references('id')->on('Service');
        });
    }

    public function down()
    {
        Schema::dropIfExists('Comments');
    }
}
