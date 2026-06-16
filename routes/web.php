<?php

use App\Http\Controllers\NoteController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::get('notes', [NoteController::class, 'index'])->name('notes');
    Route::post('notes', [NoteController::class, 'store'])->name('notes.store');
    Route::get('notes/{note}', [NoteController::class, 'show'])->name('notes.show');
    Route::patch('notes/{note}', [NoteController::class, 'update'])->name('notes.update');
    Route::delete('notes/{note}', [NoteController::class, 'destroy'])->name('notes.destroy');
});




require __DIR__ . '/settings.php';
