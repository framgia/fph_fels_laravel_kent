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

    // words learned
    $japaneseWords = [];
    $englishWords = [];
    $choices = [];

    $studentAnswers = StudentAnswer::where('student_id', $id)->get();
    foreach ($studentAnswers as $answer) {
      array_push($choices, Choice::find($answer->choice_id));
    }

    foreach ($choices as $choice) {
      if ($choice->is_correct === 1) {
        array_push($englishWords, Choice::find($choice->id)->answer);
        array_push($japaneseWords, Word::find($choice->word_id)->question);
      }
    }

    // words count
    $wordsCount = count($englishWords);
    

    // lesson learned
    $lessonLearned = StudentLog::where('student_id', $id)->where('quiz_id', '!=', 0)->count();

    // activities
    $activities = Activity::where('student_id', $id)->get();

    // lesson completed
    $lessonCompleted = [];
    $studentLogs = StudentLog::where('student_id', $id)->where('quiz_id', '!=', 0)->get();
    foreach ($studentLogs as $log) {
      array_push($lessonCompleted, Quiz::find($log->id));
    }

    // response
    $response = [
      'student' => $student,
      'words_count' => $wordsCount,
      'lesson_learned_count' => $lessonLearned,
      'activities' => $activities,
      'words_learned' => array('japanese' => $japaneseWords, 'english' => $englishWords),
      'lesson_completed' => $lessonCompleted
    ];

    return response($response, 200);
  }
}
