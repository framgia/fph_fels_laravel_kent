import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import Head from '../../../shared/Head/Head';
import Navlink from '../../../shared/Navlink.js/Navlink';
import Footer from '../../../shared/Footer/Footer';
import FormTemplate from '../../../shared/FormTemplate/FormTemplate';
import StudentAPI from '../../../api/StudentAPI';
import NavbarToggle from '../../../shared/NavbarToggle/NavbarToggle';
import styles from './Register.module.css';

const Register = () => {
  const history = useHistory();
  const [ name, setName ] = useState('');
  const [ username, setUserName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirm, setPasswordConfirm ] = useState('');
  const [ btnActive, setBtnActive ] = useState(false);

  // set submit button to active if criteria is met.
  useEffect(() => {
    if (((name && username && email && password && passwordConfirm) !== "") && (password === passwordConfirm)) {
      setBtnActive(true)
    } else {
      setBtnActive(false)
    }
  }, [name, username, email, password, passwordConfirm]);

  // payload for post a new user
  const payload = {
    name: name,
    username: username,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm
  };

  // register a user
  const registerUser = (e) => {
    e.preventDefault();

    StudentAPI.register(payload).then(res => res.json()).then(data => {
      if (data === 200) {
        Swal.fire(
          'Congratulation!',
          'You have successfully created your account',
          'success'
        ).then(() => {
          history.push('/login');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Please try again',
          text: 'Something went wrong!'
        });
      }
    });
  };

  return (
    <>
      <Head title="Register | E-Learning System" />

      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-dark wrapper">
        <Link className="navbar-brand font-weight-bold my-3" to="/">
          <span className={`p-3 rounded-lg border border-dark ${styles.brandName}`}>E-Learning System</span>
        </Link>
        <NavbarToggle />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Navlink />
          </ul>
        </div>
      </nav>

      <Container className="wrapper">
        <Row className="justify-content-center">
          <Form onSubmit={(e) => registerUser(e)} className="formSize bg-white p-4">
            <h1 className={`my-5 pt-5 text-center ${styles.headerFontWeight}`}>Register Page</h1>
            <FormTemplate
              formControlId="formBasicName"
              formLabel="Name"
              formControlType="text"
              formControlPlaceholder="Enter your complete name here"
              formValue={name}
              formOnChange={e => setName(e.target.value)}
            />

            <FormTemplate
              formControlId="formBasicUsername"
              formLabel="Username"
              formControlType="text"
              formControlPlaceholder="Enter your username here"
              formValue={username}
              formOnChange={e => setUserName(e.target.value)}
            />

            <FormTemplate
              formControlId="formBasicEmail"
              formLabel="Email"
              formControlType="email"
              formControlPlaceholder="Enter your email address here"
              formValue={email}
              formOnChange={e => setEmail(e.target.value)}
            />

            <FormTemplate
              formControlId="formBasicPassword"
              formLabel="Password"
              formControlType="password"
              formControlPlaceholder="Enter your password here"
              formValue={password}
              formOnChange={e => setPassword(e.target.value)}
            />

            <FormTemplate
              formControlId="formBasicConfirmPassword"
              formLabel="Confirm Password"
              formControlType="password"
              formControlPlaceholder="Confirm your password here"
              formValue={passwordConfirm}
              formOnChange={e => setPasswordConfirm(e.target.value)}
            />

            {
              btnActive ?
                <Button className="bg-warning d-block mx-auto w-100 my-5 border-0 text-dark font-weight-bold" type="submit">Submit</Button>
                :
                <Button className="bg-warning d-block mx-auto w-100 my-5 border-0 text-dark font-weight-bold" type="submit" disabled>Submit</Button>
            }
          </Form>
        </Row>
      </Container>

      <Footer footerClass="text-center border-top pt-5 pb-5 mt-5 wrapper"/>
    </>
  );
};

export default Register;
