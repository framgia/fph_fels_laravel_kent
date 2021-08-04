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
      'thumbnail' => 'nullable|image|max:255',
      'password' => 'required|string|confirmed'
    ]);

    /* 
      $fields['thumbnail'] = request()->file('thumbnail')->store('thumbnails');
        - This line of code is used to store the image inside the storage/app/thumbnails for easy access.
        - Profile picture is not yet needed in the register page.
        - Will integrate this one once the user will be able to acces the profile page.

      'thumbnail' => $fields['thumbnail'],
        - thumbnail upload is optional in register page.
    */
    
    Student::create([
      'name' => $fields['name'],
      'username' => $fields['username'],
      'email' => $fields['email'],
      'password' => bcrypt($fields['password'])
    ]);

    return request()->json('Successfully created.', 200);
  }
}
