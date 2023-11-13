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
        Schema::create('etudiants', function (Blueprint $table) {
            $table->increments('id_etudiant');
            $table->string('nom complet');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('sex')->default(" ");
            $table->integer('age')->default("00");
            $table->string('tel')->default("000-000-000");
            $table->integer('Nb_course')->default(0);
            $table->unsignedBigInteger('social_media_id');
            // $table->foreign('social_media_id')->references('ensignants')->on('id_social');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('etudiants');
    }
};
