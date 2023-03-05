<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Response;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ResponseController extends Controller
{
    public function index()
    {
        $response = Response::all();
        return response()->json($response);
    }

    public function show($id)
    {
        $response = Response::find($id);
        return response()->json($response);
    }

    /**
     * @throws ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'content' => 'required',
            'tags' => 'required',
        ]);

        $response = Response::create($request->all());
        return response()->json($response);
    }

    /**
     * @throws ValidationException
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required',
            'content' => 'required',
            'tags' => 'required',
        ]);

        $response = Response::find($id);
        $response->update($request->all());
        return response()->json($response);
    }
}
