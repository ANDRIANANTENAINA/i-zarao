<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vote;
use App\Models\VoteComment;
use App\Models\VoteResponse;
use Illuminate\Http\Request;

/**
 * @method static create(array $all)
 * @method static find($id)
 */
class ResponseVoteController extends Controller
{
    public function index()
    {
        $responseVote = Vote::all();
        return response()->json($responseVote);
    }

    public function showVoteComment($id)
    {
        $responseVote = VoteComment::find($id);
        return response()->json($responseVote);
    }

    public function showVoteResponse($id)
    {
        $responseVote = VoteResponse::find($id);
        return response()->json($responseVote);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'response_id' => 'required',
            'user_id' => 'required',
            'vote' => 'required',
        ]);

        $responseVote = ResponseVoteController::create($request->all());
        return response()->json($responseVote);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'response_id' => 'required',
            'user_id' => 'required',
            'vote' => 'required',
        ]);

        $responseVote = ResponseVoteController::find($id);
        $responseVote->update($request->all());
        return response()->json($responseVote);
    }
}
