<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\Course_paragsController;
use App\Http\Controllers\EnsignantController;
use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\ParagraphController;
use App\Http\Controllers\ReclamationController;
use App\Http\Controllers\SocialMediaController;
use App\Http\Controllers\BlogController;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/Coursesapi/{id?}', [CourseController::class, 'GetCourses']);

Route::get('/Blogsapi/{id?}', [BlogController::class, 'GetBlogs']);
Route::get('/AddBlogsapi', [BlogController::class, 'AddBlogs']);
Route::get('/UpdateBlogsapi', [BlogController::class, 'UpdateBlogs']);
Route::get('/DeleteBlogsapi/{id}', [BlogController::class, 'DeleteBlogs']);
Route::get('/SearchBlogsapi/{title}', [BlogController::class, 'SearchBlogs']);

Route::get('/Paragraphsapi', [ParagraphController::class, 'GetParagraphs']);

Route::get('/Categorieapi/{id?}', [CategorieController::class, 'GetCategories']);
Route::post('/AddCategorieapi', [CategorieController::class, 'AddCategorie']);
Route::put('/UpdateCategorieapi', [CategorieController::class, 'UpdateCategorie']);
Route::delete('/DeleteCategorieapi/{id}', [CategorieController::class, 'DeleteCategorie']);
Route::get('/SearchCategorieapi/{name}', [CategorieController::class, 'SearchCategorie']);

Route::get('/Etudiantapi/{id?}', [EtudiantController::class, 'GetEtudiants']);
Route::post('/AddEtudiantapi', [EtudiantController::class, 'AddEtudiant']);
Route::post('/LoginEtudiantapi', [EtudiantController::class, 'EtudiantLogin']);
Route::put('/UpdateEtudiantapi', [EtudiantController::class, 'UpdateEtudiant']);
Route::delete('/DeleteEtudiantapi/{id}', [EtudiantController::class, 'DeleteEtudiant']);
Route::get('/SearchEtudiantapi/{name}', [EtudiantController::class, 'SearchEtudiant']);

Route::get('/Ensignantapi/{id?}', [EnsignantController::class, 'GetEnsignants']);
Route::post('/AddEnsignantapi', [EnsignantController::class, 'AddEnsignant']);
Route::put('/UpdateEnsignantapi', [EnsignantController::class, 'UpdateEnsignant']);
Route::delete('/DeleteEnsignantapi/{id}', [EnsignantController::class, 'DeleteEnsignant']);
Route::get('/SearchEnsignantapi/{name}', [EnsignantController::class, 'SearchEnsignant']);
Route::post('/LoginEnsignantapi', [EnsignantController::class, 'EnsignantLogin']);

Route::get('/Reclamationapi/{id?}', [ReclamationController::class, 'GetReclamations']);
Route::post('/AddReclamationapi', [ReclamationController::class, 'AddReclamation']);
Route::delete('/DeleteReclamationapi/{id}', [ReclamationController::class, 'DeleteReclamation']);
Route::get('/SearchReclamationapi/{name}', [ReclamationController::class, 'SearchReclamation']);

Route::get('/SocialMeiasapi/{id?}', [SocialMediaController::class, 'GetSocialMedias']);

Route::get('/CourseParagapi', [Course_paragsController::class, 'GetCourseParags']);