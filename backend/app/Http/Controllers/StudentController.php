<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
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
}
