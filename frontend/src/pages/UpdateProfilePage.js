import { useSelector } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';

import Head from '../components/Head'
import NavButton from '../components/NavButton'
import MainNavlink from '../components/MainNavlink';
import defaultProfile from '../images/defaultProfile.png'

export default function UpdateProfilePage() {
  const id = localStorage.getItem('id');
  const resource = useSelector((state) => state.allResource.resource);

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
        {/* Sidebar */}
        <div className="sidenav mt-0">
          <Container className="container-sm px-5 pt-5 pb-0 text-center text-white">
            <p className="mb-5 rainbow">
              <img src={defaultProfile} className="img-thumbnail img-fluid w-100 h-100" alt="..."></img>
            </p>
          </Container>

          <Container className="text-center bg-success text-white">
            <p className="mb-0 p-3 sidenavP">5 <span className="sidenavFollow">followers</span></p>
            <p className="mb-0 p-3 sidenavP">4 <span className="sidenavFollow">following</span></p>
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
                  <td className="font-weight-bold">{resource.student.name}</td>
                </tr>
                <tr className="text-dark">
                  <td className="font-italic">Username</td>
                  <td className="font-weight-bold">{resource.student.username}</td>
                </tr>
                <tr className="text-dark">
                  <td className="font-italic">Email</td>
                  <td className="font-weight-bold">{resource.student.email}</td>
                </tr>
                <tr className="text-dark">
                  <td className="font-italic">Words Learned</td>
                  <td className="font-weight-bold">{resource.words_count}</td>
                </tr>
                <tr className="text-dark">
                  <td className="font-italic">Lessons Completed</td>
                  <td className="font-weight-bold">{resource.lesson_learned_count}</td>
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
            <Form className="updateProfileForm">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Update Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your new name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Update Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your new username" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Update Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your new email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Old Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your old password" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Update Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your new password" />
              </Form.Group>

              <Form.Group controlId="formFile">
                <Form.Label>Update Profile Picture</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <Button className="bg-primary w-100 mt-5" type="submit">Update</Button>

              <a href={`/profile/${id}`} className="btn btn-dark btn-block mt-2">Go Back</a>
            </Form>
          </Container>
        </div>
      </Container>
    </>
  );
};
