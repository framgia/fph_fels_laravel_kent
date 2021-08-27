import Head from '../components/Head';
import NavbarTemplate from '../components/NavbarTemplate';
import Quiz from '../features/quiz/Quiz';

export default function QuizPage() {

  return (
    <>
      <Head title="Quiz | E-Learning System" />

      <NavbarTemplate navClass="navbar navbar-expand-lg navbar-light bg-white wrapper" />

      <Quiz />
    </>
  );
};
