import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { getResource } from '../redux/actions/userActions';
import Head from '../components/Head'
import NavButton from '../components/NavButton'
import MainNavlink from '../components/MainNavlink';
import defaultProfile from '../images/defaultProfile.png'
import UserAuthApi from '../helpers/UserAuthApi';

export default function UpdateProfilePage() {
  const id = localStorage.getItem('id');
  const dispatch = useDispatch();
  const history = useHistory();
  const resourceData = useSelector((state) => state.allResource.resource);
  const followingsData = useSelector((state) => state.followingsData.followings);
  const { followings, followers } = followingsData;
  const { student, words_count, lesson_learned_count } = resourceData;
  const [ name, setName ] = useState('')
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ selectedFile, setSelectedFile ] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  function updateUser(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('thumbnail', selectedFile);
    formData.append('_method', 'PUT');

    UserAuthApi.updateInfo(formData).then(res => res.json()).then(data => {
      if (data.student.id == id) {
        Swal.fire(
          'Congratulation!',
          'You have successfully updated your account',
          'success'
        ).then(() => {

          UserAuthApi.getAll(data.student.id).then(res => res.json()).then(data => {
            dispatch(getResource(data));
          });

          history.push(`/profile/${id}`);
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Please try again',
          text: 'Something went wrong!'
        });

        setName('');
        setUsername('');
        setEmail('');
        setPassword('');
      }
    });
  }

  return (
    <>
      <Head title="Profile | E-Learning System" />

      <nav className="navbar navbar-expand-lg navbar-light bg-white wrapper fixed-top profileNavigation">
        <a className="navbar-brand headerFont font-weight-bolder my-3" href={`/dashboard/${id}`}><span className="p-3 rounded-lg border border-dark brandName">E-Learning System</span></a>
        <NavButton />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <MainNavlink />
          </ul>
        </div>
      </nav>

      <Container className="wrapper sidenavParent">
        <div className="sidenav mt-0">
          <Container className="container-sm px-5 pt-5 pb-0 text-center text-white">
            <p className="mb-5 rainbow">
            <img src={student.thumbnail !== null ? process.env.REACT_APP_THUMBNAIL+student.thumbnail : defaultProfile} className="profileImage" alt=".."></img>
            </p>
          </Container>

          <Container className="text-center bg-success text-white">
            <p className="mb-0 p-3 sidenavP">{followings.length} <span className="sidenavFollow">followers</span></p>
            <p className="mb-0 p-3 sidenavP">{followers.length} <span className="sidenavFollow">following</span></p>
          </Container>

          <Container className="text-white mt-5 p-0 sidenavInfoContainer bg-dark">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th colSpan="2">Personal Information</th>
                </tr>
              </thead>
              <tbody className="bg-warning">
                <tr className="text-dark">
                  <td className="font-italic">Name</td>
                  <td className="font-weight-bold">{student.name}</td>
                </tr>
                <tr className="text-dark">
                  <td className="font-italic">Username</td>
                  <td className="font-weight-bold">{student.username}</td>
                </tr>
                <tr className="text-dark">
                  <td className="font-italic">Email</td>
                  <td className="font-weight-bold">{student.email}</td>
                </tr>
                <tr className="text-dark">
                  <td className="font-italic">Words Learned</td>
                  <td className="font-weight-bold">{words_count}</td>
                </tr>
                <tr className="text-dark">
                  <td className="font-italic">Lessons Completed</td>
                  <td className="font-weight-bold">{lesson_learned_count}</td>
                </tr>
              </tbody>
            </table>
          </Container>
        </div>

        <div className="main">
          {/* activities */}
          <div className="my-5">
            <h5 className="bg-secondary text-center pb-2 pt-3 text-light font-weight-bold font-italic">Update Profile Information</h5>
          </div>

          <Container className="justify-content-center updateProfileContainer">
            <Form id="form" method="POST" encType="multipart/form-data" onSubmit={e => updateUser(e)} className="updateProfileForm">
              <Form.Group controlId="formBasicName">
                <Form.Label>Update Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your new name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicUsername">
                <Form.Label>Update Username</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your new username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
              />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Update Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your new email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
              />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Update Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Enter your new password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
              />
              </Form.Group>

              <Form.Group controlId="formFile">
                <Form.Label>Update Profile Picture</Form.Label>
                <Form.Control 
                  type="file"
                  id="file"
                  name="file"
                  onChange={changeHandler}
                />
              </Form.Group>

              <Button className="bg-primary w-100 mt-5" type="submit">Update</Button>

              <Link className="btn btn-dark btn-block mt-2" to={`/profile/${id}`}>Go Back</Link>
            </Form>
          </Container>
        </div>
      </Container>
    </>
  );
};
