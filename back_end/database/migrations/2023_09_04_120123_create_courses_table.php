<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->increments('id_course');
            $table->string('title');
            $table->integer('duree');
            $table->integer('N_participant');
            $table->integer('likes')->default(0);
            $table->string('discription');
            $table->float('price');
            $table->string('Language');
            $table->unsignedBigInteger('ensignant_id');
            // $table->foreign('ensignant_id')->references('ensignants')->on('id_ensignant');
            $table->unsignedBigInteger('categorie_id');
            // $table->foreign('categorie_id')->references('ensignants')->on('id_categorie');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
