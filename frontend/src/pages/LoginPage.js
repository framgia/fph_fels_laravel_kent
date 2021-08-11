import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Head from '../components/Head';
import Footer from '../components/Footer';
import Navlink from '../components/Navlink';
import FormTemplate from '../components/FormTemplate';
import UserAuthApi from '../helpers/UserAuthApi';

export default function LoginPage() {
  const history = useHistory();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ btnActive, setBtnActive ] = useState(false);

  // control the functionality of submit button
  useEffect(() => {
    if((email && password) !== "") {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [ email, password ]);

  // payload for post a new user
  const payload = {
    email: email,
    password: password,
  };

  // function to log in a user
  function loginUser(e) {
    e.preventDefault();

    UserAuthApi.login(payload).then(res => res.json()).then(data => {
      if (data.token === undefined) {
        Swal.fire({
          icon: 'error',
          title: 'Please try again!',
          text: 'Something went wrong!',
        });
      } else {
        Swal.fire(
          'Congratulation!',
          'You have successfully logged in to E-Learning System.',
          'success'
        ).then(() => {
          localStorage.setItem('token', data.token);
          history.push('/dashboard')
        });
      }
    });
  };

  return (
    <>
      <Head title="Login | E-Learning System" />

      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-dark wrapper">
        <a className="navbar-brand font-weight-bold my-3" href="/"><span className="p-3 rounded-lg border border-dark brandName">E-Learning System</span></a>
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Navlink />
          </ul>
        </div>
      </nav>

      <Container className="wrapper">
        <Row className="justify-content-center">
          <Form onSubmit={(e) => loginUser(e)} className="formSize bg-white p-4">
            <h1 className="my-5 pt-5 text-center font-weight-bold">Login Page</h1>
            <FormTemplate
              formControlId="formBasicEmail"
              formLabel="Email"
              formControlType="email"
              formControlPlaceholder="Enter your email here"
              formValue={email}
              formOnChange={e => setEmail(e.target.value)}
            />

            <FormTemplate
              formControlId="formBasicUsername"
              formLabel="Password"
              formControlType="password"
              formControlPlaceholder="Enter your password here"
              formValue={password}
              formOnChange={e => setPassword(e.target.value)}
            />

            {
              btnActive ?
                <Button className="bg-primary d-block mx-auto w-100 my-5" type="submit">Submit</Button>
                :
                <Button className="bg-primary d-block mx-auto w-100 my-5" type="submit" disabled>Submit</Button>
            }
          </Form>
        </Row>
      </Container>

      <Footer footerClass="text-center border-top pt-5 pb-5 mt-5 wrapper fixed-bottom" />
    </>
  );
};
