import { Container, Row } from 'react-bootstrap';

import Head from "../components/Head";
import NavbarTemplate from "../components/NavbarTemplate";
import Categories from '../features/categories/Categories';

export default function CategoriesPage() {
  return (
    <>
      <Head title="Categories | E-Learning System" />

      <NavbarTemplate navClass="navbar navbar-expand-lg navbar-light bg-white wrapper" />

      <Container className="wrapper mt-2">
        <h1 className="text-center py-2 text-white bg-dark font-weight-bold rounded">Lessons</h1>

        <Row className="">
          <Categories />
        </Row>
      </Container>
    </>
  );
};
