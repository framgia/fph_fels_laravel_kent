<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    public function studentlog()
    {
      return $this->hasOne(StudentLog::class, 'quiz_id');
    }
}
