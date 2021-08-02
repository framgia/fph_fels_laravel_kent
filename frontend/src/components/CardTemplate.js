import { Card } from 'react-bootstrap';

function CardTemplate(props) {
  return (
    <>
      <Card className={props.cardClass}>
        <Card.Body className="cardBody p-5">
          <Card.Title className="font-weight-bold">{props.title}</Card.Title>
          <Card.Text className="font-italic">{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};


export default CardTemplate;
