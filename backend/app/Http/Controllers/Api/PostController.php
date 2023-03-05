<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {   // get all post and tags and responses
        $post = Post::with('tags', 'responses')->get();

        if($post->isEmpty())
            return response()->json(['message' => 'No posts found'], 404);
        return response()->json($post);
    }

    public function show($id)
    {
        $post = Post::with('tags', 'responses')
            ->where('id', $id)->get();
        return response()->json($post);
    }

    public function search(Request $request)
    {
        $query = $request->get('q');
        $post = Post::with('tags', 'responses')
            ->where('title', 'like', "%$query%")
            ->orWhere('content', 'like', "%$query%")
            ->get();
        return response()->json($post);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'content' => 'required',
            'tags' => 'required',
        ]);

        $post = Post::create($request->all());
        return response()->json($post);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required',
            'content' => 'required',
            'tags' => 'required',
        ]);

        $post = Post::find($id);
        $post->update($request->all());
        return response()->json($post);
    }
}
