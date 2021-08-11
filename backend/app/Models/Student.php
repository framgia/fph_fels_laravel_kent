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
    protected $guarded = [];

    protected $hidden = [
      'password',
      'remember_token'
    ];

    protected $casts = [
      'email_verified_at' => 'datetime'
    ];

    public function activities()
    {
      return $this->hasMany(Activity::class);
    }

    public function studenLogs()
    {
      return $this->hasMany(StudentLog::class);
    }

    public function choices()
    {
      return $this->hasMany(Choice::class);
    }
}
