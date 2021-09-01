<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz;
use App\Models\Word;
use App\Models\Choice;
use App\Models\StudentAnswer;

class LessonController extends Controller
{
    public function getQuestion(Request $request) {
        /* 
            $request
                quiz_id
                word_id
        */

        $quiz = Quiz::find($request->quiz_id);

        $word = Word::where('id', $request->word_id)->where('quiz_id', $request->quiz_id)->get();

        $choices = Choice::where('word_id', $request->word_id)->get();

        $response = [
            'quiz' => $quiz,
            'word' => $word,
            'choices' => $choices
        ];

        return response($response, 200);
    }

    public function storeStudentAnswer(Request $request)
    {
        /* 
            $request
                student_id
                choice_id
        */

        StudentAnswer::create([
            'student_id' => $request->student_id,
            'choice_id' => $request->choice_id,
            'quiz_id' => $request->quiz_id
        ]);

        return response('Successfully Recorded', 200);
    }

    public function getStudentAnswers(Request $request)
    {
        /* 
            $request
                student_id
                quiz_id
        */

        $studentAnswers = StudentAnswer::where('student_id', $request->student_id)->where('quiz_id', $request->quiz_id)->get();

        $choices = [];
        foreach ($studentAnswers as $answer) {
            array_push($choices, Choice::find($answer->choice_id));
        }

        $words = [];
        foreach($choices as $choice) {
            array_push($words, Word::find($choice->word_id));
        }

        $response = [
            'words' => $words,
            'choices' => $choices
        ];

        return response($response, 200);
    }
}
