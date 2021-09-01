<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz;

class QuizController extends Controller
{
	public function index()
	{
		// get all the quizzes
		$quizzes = Quiz::all();

		$response = [
				'quizzes' => $quizzes
		];

		return response($response, 200);
	}
}
