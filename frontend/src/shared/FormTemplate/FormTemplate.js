import { Form } from 'react-bootstrap';

const FormTemplate = (props) => {
  return (
    <>
      <Form.Group className="w-100 mx-auto px-0" controlId={props.formControlId}>
        <Form.Label>{props.formLabel}</Form.Label>
        <Form.Control value={props.formValue} onChange={props.formOnChange} type={props.formControlType} placeholder={props.formControlPlaceholder} />
      </Form.Group>
    </>
  );
};

export default FormTemplate;
