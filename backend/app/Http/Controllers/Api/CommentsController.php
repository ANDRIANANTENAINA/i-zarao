<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function index()
    {
        $comments = Comment::all();
        return response()->json($comments);
    }

    public function show($id)
    {
        $comment = Comment::find($id);
        return response()->json($comment);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'response_id' => 'required',
            'user_id' => 'required',
            'comment' => 'required',
        ]);

        $comment = Comment::create($request->all());
        return response()->json($comment);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'response_id' => 'required',
            'user_id' => 'required',
            'comment' => 'required',
        ]);

        $comment = Comment::find($id);
        $comment->update($request->all());
        return response()->json($comment);
    }
}
