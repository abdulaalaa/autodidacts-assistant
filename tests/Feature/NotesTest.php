<?php

use App\Models\User;

test('guests are redirected from the notes page', function () {
    $this->get(route('notes'))->assertRedirect(route('login'));
});

test('authenticated users can visit the notes page', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('notes'))
        ->assertOk();
});

test('authenticated users can store notes', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('notes.store'), [
            'title' => 'First autodidact note',
            'content' => 'This note came from the React form.',
        ])
        ->assertRedirect(route('notes'));

    $this->assertDatabaseHas('notes', [
        'user_id' => $user->id,
        'title' => 'First autodidact note',
        'content' => 'This note came from the React form.',
    ]);
});

test('note content is required', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('notes.store'), [
            'title' => 'Missing content',
            'content' => '',
        ])
        ->assertSessionHasErrors('content');
});
