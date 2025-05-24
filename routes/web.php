<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/plan-estudio', function () {
    return view('plan_estudio');
})->name('PlanEstudio');
