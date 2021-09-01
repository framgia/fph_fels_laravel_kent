import { Container, Row } from 'react-bootstrap';

import Head from "../components/Head";
import NavbarTemplate from "../components/NavbarTemplate";
import LessonTemplate from '../components/LessonTemplate';

export default function CategoriesPage() {
  return (
    <>
      <Head title="Categories | E-Learning System" />

      <NavbarTemplate navClass="navbar navbar-expand-lg navbar-light bg-white wrapper" />

      <Container className="wrapper mt-2">
        <h1 className="text-center py-2 text-white bg-dark font-weight-bold rounded">Lessons</h1>

        <Row className="">
          <LessonTemplate
            title="Basic 101"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <LessonTemplate
            title="Basic 102"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <LessonTemplate
            title="Basic 103"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <LessonTemplate
            title="Basic 104"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </Row>
      </Container>
    </>
  );
};
