<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Following;
use App\Models\Student;

class FollowingController extends Controller
{
	public function index($id)
  {
    $followingsTable = Following::where('student_id', $id)->get();
    $followings = [];
    foreach ($followingsTable as $following) {
      array_push($followings, Student::find($following->student_follow_id));
    }

    $followersTable = Following::where('student_follow_id', $id)->get();
    $followers = [];
    foreach ($followersTable as $following) {
      array_push($followers, Student::find($following->student_id));
    }

    $response = [
      'followings' => $followings,
      'followers' => $followers
    ];

    return response($response, 200);
  }

  public function follow(Request $request)
  {
    $fields = $request->validate([
      'student_id' => 'required',
      'student_follow_id' => 'required',
    ]);

    Following::create([
      'student_id' => $fields['student_id'],
      'student_follow_id' => $fields['student_follow_id']
    ]);

    return request()->json('successfully added', 200);
  }

  public function unFollow(Request $request)
  {
    $following = Following::where('student_id', $request->student_id)->where('student_follow_id', $request->student_follow_id)->get();
    $following->each->delete();

    $response = [
      'message' => 'success'
    ];

    return response($response, 200);
  }
}
