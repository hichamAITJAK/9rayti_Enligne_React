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
        Schema::create('course_parags', function (Blueprint $table) {
            $table->unsignedBigInteger('id_course');
            // $table->foreign('id_course')->references('id_course')->on('courses');
            $table->unsignedBigInteger('id_paragraphe');
            // $table->foreign('id_paragraphe')->references('id_paragraphe')->on('paragraphes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_parags');
    }
};
