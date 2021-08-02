import { Form } from 'react-bootstrap';

export default function FormTemplate(props) {
  return (
    <>
      <Form.Group className="w-100 mx-auto px-0" controlId={props.formControlId}>
        <Form.Label>{props.formLabel}</Form.Label>
        <Form.Control type={props.formControlType} placeholder={props.formControlPlaceholder} />
      </Form.Group>
    </>
  );
};