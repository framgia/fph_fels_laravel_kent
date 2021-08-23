<?php

namespace App\Http\Controllers;

use App\Models\Following;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
  public function show($id)
  {
    $followingsTable = Following::where('student_id', $id)->where('type', 'follow')->get();
    $followings = [];
    foreach ($followingsTable as $following) {
      array_push($followings, Student::find($following->student_follow));
    }

    $followersTable = Following::where('student_id', $id)->where('type', 'follower')->get();
    $followers = [];
    foreach ($followersTable as $following) {
      array_push($followers, Student::find($following->student_follower));
    }

    $response = [
      'followings' => $followings,
      'followers' => $followers
    ];

    return response($response, 200);
  }

  public function store(Request $request) 
  {
    $fields = $request->validate([
      'name' => 'required|string|max:255',
      'username' => 'required|string|max:255',
      'email' => 'required|string|unique:students,email|max:255',
      'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      'password' => 'required|string|confirmed|min:8|max:255'
    ]);
    
    Student::create([
      'name' => $fields['name'],
      'username' => $fields['username'],
      'email' => $fields['email'],
      'password' => bcrypt($fields['password'])
    ]);

    return request()->json('Successfully created.', 200);
  }

  public function login(Request $request)
  {
    $fields = $request->validate([
      'email' => 'required|string',
      'password' => 'required|string'
    ]);

    $student = Student::where('email', $fields['email'])->first();

    if (!$student || !Hash::check($fields['password'], $student->password)) {
      return response([
        'message' => 'Bad Credentials'
      ], 401);
    }

    $token = $student->createToken('myapptoken')->plainTextToken;

    $response = [
      'student' => $student,
      'token' => $token
    ];

    return response($response, 200);
  }

  public function logout()
  {
    Auth::user()->tokens->each(function($token, $key) {
      $token->delete();
    });

    $response = [
      'message' => 'Logged out'
    ];

    return response($response, 200);
  }

  public function update(Request $request) {
    $studentDetails = Auth::user();
    $student = Student::find($studentDetails->id);

    $student->update([
      'name' => $request->name,
      'username' => $request->username,
      'email' => $request->email,
      'password' => $request->password,
      'thumbnail' => request()->file('thumbnail')->store('thumbnails')
    ]);

    return response('Updated successfully', 200);
  }
}
