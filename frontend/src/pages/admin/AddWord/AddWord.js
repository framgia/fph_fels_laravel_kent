import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import Head from '../../../shared/Head/Head';
import NavbarAdmin from '../../../shared/NavbarAdmin/NavbarAdmin';
import styles from './AddWord.module.css';

const AddWord = () => {
  return (
    <>
      <Head title="Add Word | E-Learning System" />

      <NavbarAdmin navClass="navbar navbar-expand-lg navbar-light bg-white wrapper"/>

      <Container className="wrapper mt-2">
        <h1 className={`text-center py-2 text-white bg-dark rounded ${styles.addWordHeader}`}>Add Word</h1>

        <Row className="justify-content-center wrapper mt-5 ">
          <Col md={6}>
            <h5 className="font-weight-bold">Word</h5>
            <Form>
              <Form.Group controlId="formBasicWord">
                <Form.Control type="text" placeholder="Enter the japanese word here" />
              </Form.Group>
            </Form>
          </Col>

          <Col md={6}>
            <h5 className="font-weight-bold">Choices</h5>
            <Form className="mb-5">
              <Form.Group controlId="formBasicChoices">
                <Form.Control type="text" placeholder="Enter the choice #1" />
              </Form.Group>

              <Form.Group controlId="formBasicChoices">
                <Form.Control type="text" placeholder="Enter the choice #2" />
              </Form.Group>

              <Form.Group controlId="formBasicChoices">
                <Form.Control type="text" placeholder="Enter the choice #3" />
              </Form.Group>

              <Form.Group controlId="formBasicChoices">
                <Form.Control type="text" placeholder="Enter the choice #4" />
              </Form.Group>
            </Form>

            <Button className="btn-block btn-warning font-weight-bold">Submit</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddWord;
