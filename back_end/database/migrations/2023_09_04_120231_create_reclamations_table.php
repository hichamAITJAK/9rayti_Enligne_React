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
        Schema::create('reclamations', function (Blueprint $table) {
            $table->increments('id_reclamation');
            $table->string('title');
            $table->string('sujet');
            $table->string('discription');
            $table->string('reclamer par');
            $table->string('reclamer contre');
            // $table->unsignedBigInteger('id_social_media');
            // $table->foreign('social_media_id')->references('ensignants')->on('id_social_media');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reclamations');
    }
};
