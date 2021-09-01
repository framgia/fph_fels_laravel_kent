import { Col, Card, Button } from "react-bootstrap";

export default function LessonTemplate(props) {
  return (
    <>
      <Col className="mt-5 d-flex justify-content-center">
        <Card style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.text}
            </Card.Text>
            <Button className="float-right px-5" variant="success">Start</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
