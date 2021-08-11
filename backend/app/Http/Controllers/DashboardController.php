<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Choice;
use App\Models\Student;
use App\Models\StudentLog;
use App\Models\StudentAnswer;
use App\Models\Word;
use App\Models\Quiz;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
  public function index($id)
  {
    // student info
    $student = Student::find($id);

    // words count
    $wordCount = Choice::where('student_id', $id)->where('is_correct', 1)->count();

    // lesson learned
    $lessonLearned = StudentLog::where('student_id', $id)->where('quiz_id', '!=', 0)->count();

    // activities
    $activities = Activity::where('student_id', $id)->get();

    // words learned
    $japaneseWords = [];
    $englishWords = [];
    $answeredWords = Choice::where('student_id', $id)->where('is_correct', 1)->get();
    foreach ($answeredWords as $answer) {
      $questionWords = Word::where('id', $answer->word_id)->get();
      foreach ($questionWords as $question) {
        array_push($japaneseWords, Word::find($question->id)->question);
        array_push($englishWords, Choice::find($question->id)->answer);
      }
    }

    // lesson completed
    $lessonCompleted = [];
    $studentLogs = StudentLog::where('student_id', $id)->where('quiz_id', '!=', 0)->get();
    foreach ($studentLogs as $log) {
      array_push($lessonCompleted, Quiz::find($log->id));
    }

    // response
    $response = [
      'student' => $student,
      'words_count' => $wordCount,
      'lesson_learned_count' => $lessonLearned,
      'activities' => $activities,
      'words_learned' => array('japanese' => $japaneseWords, 'english' => $englishWords),
      'lesson_completed' => $lessonCompleted
    ];

    return response($response, 200);
  }
}
