import { Card } from 'react-bootstrap';

import styles from './CardTemplate.module.css';

const CardTemplate = (props) => {
  return (
    <>
      <Card className={props.cardClass}>
        <Card.Body className={`p-5 ${styles.cardHover}`}>
          <Card.Title className={`${styles.cardHeader}`}>{props.title}</Card.Title>
          <Card.Text className={`font-italic ${styles.cardText}`}>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardTemplate;
