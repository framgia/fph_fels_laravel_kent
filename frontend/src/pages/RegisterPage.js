import Head from '../components/Head';
import Navlink from '../components/Navlink';
import Footer from '../components/Footer';
import FormTemplate from '../components/FormTemplate';
import { 
  Form,
  Container,
  Row,
  Button
} from 'react-bootstrap';

export default function RegisterPage() {
  return (
    <>
      <Head title="Register | E-Learning System" />

      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-dark wrapper">
        <a className="navbar-brand font-weight-bold" href="/">E-Learning System</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Navlink navClass="nav-link navLink" icon={<i className="bi bi-door-open pr-1"></i>} navLink="#" navName="Login" />
            <Navlink navClass="nav-link navLink active font-italic" icon={<i className="bi bi-person-plus pr-1"></i>} navLink="/register" navName="Register" />
          </ul>
        </div>
      </nav>

      <Container className="wrapper">
        <Row className="justify-content-center">
          <Form className="formSize bg-white p-4">
            <h1 className="my-4 text-center font-weight-bold">Register Page</h1>
            <FormTemplate 
              formControlId="formBasicName" 
              formLabel="Name" 
              formControlType="text" 
              formControlPlaceholder="Enter your complete name here" 
            />

            <FormTemplate
              formControlId="formBasicUsername"
              formLabel="Username"
              formControlType="text"
              formControlPlaceholder="Enter your username here"
            />

            <FormTemplate
              formControlId="formBasicEmail"
              formLabel="Email"
              formControlType="email"
              formControlPlaceholder="Enter your email address here"
            />

            <FormTemplate
              formControlId="formBasicPassword"
              formLabel="Password"
              formControlType="password"
              formControlPlaceholder="Enter your password here"
            />

            <FormTemplate
              formControlId="formBasicConfirmPassword"
              formLabel="Confirm Password"
              formControlType="password"
              formControlPlaceholder="Confirm your password here"
            />

            <Button className="bg-primary d-block mx-auto w-100 my-5" type="submit">Submit</Button>
          </Form>
        </Row>
      </Container>

      <Footer footerClass="text-center border-top pt-3 mt-5 fixed-bottom"/>
    </>
  );
}; 