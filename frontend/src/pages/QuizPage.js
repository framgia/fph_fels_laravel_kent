import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

import Head from '../components/Head';
import NavbarTemplate from '../components/NavbarTemplate';
import QuizData from '../dummy-data/QuizData';

export default function QuizPage() {
  const [ currentQuestion, setCurrentQuestion ] = useState(0);
	const [ showScore, setShowScore ] = useState(false);
	const [ score, setScore ] = useState(0);
  const [ finalScore, setFinalScore ] = useState([]);

	const handleAnswerOptionClick = (answerOption) => {
		if (answerOption.isCorrect) {
			setScore(score + 1);

      setFinalScore(finalScore => [ ...finalScore, {
        symbol: 'O',
        japanese: QuizData[currentQuestion].japanese,
        english: answerOption.answer
      }]);
		}

    if (!answerOption.isCorrect) {
      setFinalScore(finalScore => [ ...finalScore, {
        symbol: 'X',
        japanese: QuizData[currentQuestion].japanese,
        english: answerOption.answer
      }]);
    }

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < QuizData.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  return (
    <>
      <Head title="Quiz | E-Learning System" />

      <NavbarTemplate navClass="navbar navbar-expand-lg navbar-light bg-white wrapper" />

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
                      <span className="font-weight-bold">Result</span>: {score} of {QuizData.length}
                    </h5>
                  </Col>
                  <Col md={6}>
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
                          finalScore.map((final) => (
                            <tr>
                              <td className={final.symbol === "O"? "text-success" : "text-dark"}>{final.symbol}</td>
                              <td>{final.japanese}</td>
                              <td>{final.english}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </Col>
                </>
              ) 
            : 
              (
                <>
                  <Col className="p-5 align-middle">
                    <h5 className="font-weight-bold mb-5">Basic 101</h5>
                    <h1 className="text-center quizFont">{QuizData[currentQuestion].japanese}</h1>
                  </Col>

                  <Col className="p-5">
                    <h5 className="font-weight-bold mb-5 text-right"><span>{currentQuestion + 1}</span> of {QuizData.length}</h5>
                    {
                      QuizData[currentQuestion].options.map((answerOption) => (
                        <button 
                          className="btn btn-primary btn-lg btn-block font-weight-bold" 
                          onClick={() => handleAnswerOptionClick(answerOption)}
                        >{answerOption.answer}</button>
                      ))
                    }
                  </Col>
                </>
              )
          }
        </Row>
      </Container>
    </>
  );
};
