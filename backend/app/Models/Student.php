<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Student extends Model
{
    use HasFactory, Notifiable, HasApiTokens;

    // mass assignment
    protected $fillable = [
      'name',
      'username',
      'email',
      'thumbnail',
      'password'
    ];

    protected $hidden = [
      'password',
      'remember_token'
    ];

    protected $casts = [
      'email_verified_at' => 'datetime'
    ];
}
