<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
  // register a new user
  public function store(Request $request) 
  {
    $fields = $request->validate([
      'name' => 'required|string|max:255',
      'username' => 'required|string|max:255',
      'email' => 'required|string|unique:students,email|max:255',
      'thumbnail' => 'required|image|max:255',
      'password' => 'required|string|confirmed|max:255'
    ]);

    $fields['thumbnail'] = request()->file('thumbnail')->store('thumbnails');

    Student::create([
      'name' => $fields['name'],
      'username' => $fields['username'],
      'email' => $fields['email'],
      'thumbnail' => $fields['thumbnail'],
      'password' => bcrypt($fields['password'])
    ]);

    return request()->json('Successfully created.', 200);
  }
}
