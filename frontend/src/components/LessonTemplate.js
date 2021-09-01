import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Link 
              style={{'textDecoration': 'none'}} 
              className="rounded float-right px-5 py-2 bg-success text-white"
              to={props.route}
              >Start
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
