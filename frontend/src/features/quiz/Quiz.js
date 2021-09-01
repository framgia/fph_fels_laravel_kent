import { Container, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getQuiz } from './quizSlice';
import SpinnerTemplate from '../../components/SpinnerTemplate';
import UserAuthApi from '../../helpers/UserAuthApi';

export default function Quiz() {
  const loggedId = localStorage.getItem('id');
  const dispatch = useDispatch();
  const { id } = useParams();
  const [ currentQuestion, setCurrentQuestion ] = useState(1);
  const [ showScore, setShowScore ] = useState(false);
  const [ answers, setAnswers ] = useState([]);
  const [ correct, setCorrect ] = useState(0);

  const QuizDetails = () => {
    const { quiz, word, choices, questions_count } = useSelector((state) => state.quiz.quiz);
    const { status } = useSelector((state) => state.quiz);

    // UserAuthAPI.getQuestion paramaters
    const formData = new FormData();
    formData.append('quiz_id', id);
    formData.append('word_id', currentQuestion);

    // fetch LessonController getQuestion method
    useEffect(() => {
      dispatch(getQuiz(formData));
    }, []);

    const handleAnswerOptionClick = (choice) => {
      // UserAuthAPI.storeAnswer parameters
      const formDataChoice = new FormData();
      formDataChoice.append('student_id', loggedId);
      formDataChoice.append('quiz_id', id);
      formDataChoice.append('choice_id', choice.id)

      // store answers
      UserAuthApi.storeAnswer(formDataChoice).then(res => res.json()).then(data => {
        console.log(data);
      });

      const nextQuestion = currentQuestion + 1;

      if (currentQuestion < questions_count) {
        setCurrentQuestion(nextQuestion);
      } else {
        // getAnswers parameters
        const formDataAnswers = new FormData();
        formDataAnswers.append('student_id', loggedId);
        formDataAnswers.append('quiz_id', id);

        // get answers
        UserAuthApi.getAnswers(formDataAnswers).then(res => res.json()).then(data => {
          setAnswers(data.answers);
          setCorrect(data.correct_answers);
        });

        // show scores
        setShowScore(true);
      }
    };

    if(status === 'loading' || status === null) {
      return <SpinnerTemplate />;
    } else {
      return (
        <Container className="wrapper mt-2">
          <h1 className="text-center py-2 text-white bg-success font-weight-bold rounded">Quiz</h1>
  
          <Row className="mt-3 p-5 justify-content-center">
            {
              showScore ? 
                (
                  <>
                    <Col md={6}>
                      <h5 className="font-weight-bold mb-5 text-center">Basic 101</h5>
                    </Col>
                    <Col md={6}>
                      <h5 className="mb-5 text-center">
                        <span className="font-weight-bold">Result</span>: {correct} of {answers.length}
                      </h5>
                    </Col>
                    <Col className="text-center" md={6}>
                      <table className="table text-center">
                        <thead>
                          <tr>
                            <th>Evaluation</th>
                            <th>Word</th>
                            <th>Answer</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            answers.map((answer) => (
                              <tr>
                                <td className={answer.answer.is_correct === 1? "text-success" : "text-dark"}
                                >{answer.answer.is_correct === 1? 'O' : 'X'}</td>
                                <td>{answer.question.question}</td>
                                <td>{answer.answer.answer}</td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                      <Link className="mt-5 btn btn-dark" to="/categories">Categories</Link>
                    </Col>
                  </>
                ) 
              : 
                (
                  <>
                    <Col className="p-5 align-middle">
                      <h5 className="font-weight-bold mb-5">{quiz.title}</h5>
                      <h1 className="text-center quizFont">{word.question}</h1>
                    </Col>
  
                    <Col className="p-5">
                      <h5 className="font-weight-bold mb-5 text-right"><span>{currentQuestion}</span> of {questions_count}</h5>
                      {
                        choices.map((choice) => (
                          <button 
                            className="btn btn-primary btn-lg btn-block font-weight-bold" 
                            onClick={() => handleAnswerOptionClick(choice)}
                          >{choice.answer}</button>
                        ))
                      }
                    </Col>
                  </>
                )
            }
          </Row>
        </Container>
      );
    }
  };

  return (
    <>
      <QuizDetails />
    </>
  );
};
