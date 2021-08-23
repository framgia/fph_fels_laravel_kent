<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentLog extends Model
{
    use HasFactory;

    public function student()
    {
      return $this->belongsTo(Student::class);
    }

    public function studentAnswer()
    {
      return $this->hasOne(StudentAnswer::class);
    }
}
