<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
  // register a new user
  public function store(Request $request) {
    $fields = $request->validate([
      'name' => 'required|string',
      'username' => 'required|string',
      'email' => 'required|string|unique:students,email',
      'thumbnail' => 'required|image',
      'password' => 'required|string|confirmed'
    ]);

    $fields['thumbnail'] = request()->file('thumbnail')->store('thumbnails');

    $student = Student::create([
      'name' => $fields['name'],
      'username' => $fields['username'],
      'email' => $fields['email'],
      'thumbnail' => $fields['thumbnail'],
      'password' => bcrypt($fields['password'])
    ]);

    $token = $student->createToken('myapptoken')->plainTextToken;

    $response = [
      'student' => $student,
      'token' => $token
    ];

    return response($response, 201);
  }
}
