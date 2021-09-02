<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentAnswer extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function studentLog()
    {
      return $this->belongsTo(StudentLog::class);
    }
    
}
