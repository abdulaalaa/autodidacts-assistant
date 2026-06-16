<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NoteController extends Controller
{
    /**
     * Display the authenticated user's notes.
     */
    public function index(Request $request): Response
    {
        return Inertia::render('notes', [
            'notes' => $request->user()
                ->notes()
                ->latest()
                ->get(['id', 'title', 'content', 'created_at', 'updated_at']),
        ]);
    }

    /**
     * Store a new note for the authenticated user.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['nullable', 'string', 'max:255'],
            'content' => ['required', 'string'],
        ]);

        $request->user()->notes()->create([
            'title' => ($validated['title'] ?? null) ?: 'Untitled note',
            'content' => $validated['content'],
        ]);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Note saved.')]);

        return to_route('notes');
    }

    /**
     * Display a single note owned by the authenticated user.
     */
    public function show(Request $request, Note $note): Response
    {
        abort_unless($note->user_id === $request->user()->id, 404);

        return Inertia::render('notes', [
            'note' => $note->only(['id', 'title', 'content', 'created_at', 'updated_at']),
            'notes' => $request->user()
                ->notes()
                ->latest()
                ->get(['id', 'title', 'content', 'created_at', 'updated_at']),
        ]);
    }

    /**
     * Update a note owned by the authenticated user.
     */
    public function update(Request $request, Note $note): RedirectResponse
    {
        abort_unless($note->user_id === $request->user()->id, 404);

        $validated = $request->validate([
            'title' => ['nullable', 'string', 'max:255'],
            'content' => ['required', 'string'],
        ]);

        $note->update([
            'title' => ($validated['title'] ?? null) ?: 'Untitled note',
            'content' => $validated['content'],
        ]);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Note updated.')]);

        return to_route('notes');
    }

    /**
     * Delete a note owned by the authenticated user.
     */
    public function destroy(Request $request, Note $note): RedirectResponse
    {
        abort_unless($note->user_id === $request->user()->id, 404);

        $note->delete();

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Note deleted.')]);

        return to_route('notes');
    }
}
