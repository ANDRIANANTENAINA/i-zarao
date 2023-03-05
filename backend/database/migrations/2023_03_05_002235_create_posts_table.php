<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('tags')->nullable();
            $table->text('content')->nullable();
            $table->string('slug')->nullable();
            $table->string('image')->nullable();
            $table->string('file')->nullable();
            $table->string('status'); // published, draft, deleted
            $table->string('type'); // post, page
            $table->string('author');


            $table->unsignedBigInteger('matricule');
            $table->foreign('matricule')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
