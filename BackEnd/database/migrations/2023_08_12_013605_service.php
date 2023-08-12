<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceTable extends Migration
{
    public function up()
    {
        Schema::create('Service', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('PrividerID');
            $table->unsignedBigInteger('Path');
            $table->string('Title', 250);
            $table->string('Description', 250);
            $table->string('URL', 250);
            $table->unsignedBigInteger('Thumbnail');
            $table->unsignedBigInteger('Type');
            $table->timestamps();

            $table->foreign('PrividerID')->references('id')->on('ServiceProvider');
            $table->foreign('Path')->references('id')->on('Path');
            $table->foreign('Thumbnail')->references('id')->on('Thumbnails');
            $table->foreign('Type')->references('id')->on('Type');
        });
    }

    public function down()
    {
        Schema::dropIfExists('Service');
    }
}
