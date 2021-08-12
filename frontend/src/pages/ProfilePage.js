import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Head from '../components/Head';
import NavButton from '../components/NavButton';
import MainNavlink from '../components/MainNavlink';
import defaultProfile from '../images/defaultProfile.png';
import ActivitiesData from '../dummy-data/activities';
import FollowingData from '../dummy-data/FollowingData';
import avatar from '../images/user2.jpg';
import FollowersData from '../dummy-data/FollowersData';

export default function ProfilePage() {
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

          <Container className="mt-5">
            <button type="button" className="btn btn-dark btn-lg btn-block sidenavButton font-weight-light">Update Profile</button>
          </Container>
        </div>

        <div className="main">
          {/* activities */}
          <div className="my-5">
            <h5 className="bg-dark text-center pb-2 pt-3 text-light font-weight-bold font-italic">Activities</h5>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  ActivitiesData.map((mapData) => {
                    return (
                      <>
                        <tr>
                          <td>{mapData.description}</td>
                          <td>{mapData.date}</td>
                        </tr>
                      </>
                    );
                  })
                }
              </tbody>
            </Table>
          </div>
          
          {/* following */}
          <div className="my-5">
            <h5 className="bg-dark text-center pb-2 pt-2 text-light font-weight-bold font-italic">Following</h5>
            <Table striped bordered hover size="sm">
              <thead>
                <tr className="text-center">
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Words Learned</th>
                  <th>Lessons Completed</th>
                </tr>
              </thead>
              <tbody>
                {
                  FollowingData.map((mapData) => {
                    return (
                      <>
                        <tr className="text-center">
                          <td className="align-middle">
                            <img className="rounded-circle" width={50} height="50" src={avatar} alt="avatar"></img>
                          </td>
                          <td className="align-middle">{mapData.name}</td>
                          <td className="align-middle">{mapData.email}</td>
                          <td className="align-middle">{mapData.wordsLearned}</td>
                          <td className="align-middle">{mapData.lessonsCompleted}</td>
                        </tr>
                      </>
                    );
                  })
                }
              </tbody>
            </Table>
          </div>
          
          {/* followers */}
          <div className="my-5">
            <h5 className="bg-dark text-center pb-2 pt-2 text-light font-weight-bold font-italic">Followers</h5>
            <Table striped bordered hover size="sm">
              <thead>
                <tr className="text-center">
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Words Learned</th>
                  <th>Lessons Completed</th>
                </tr>
              </thead>
              <tbody>
                {
                  FollowersData.map((mapData) => {
                    return (
                      <>
                        <tr className="text-center">
                          <td className="align-middle">
                            <img className="rounded-circle" width={50} height="50" src={defaultProfile} alt="avatar"></img>
                          </td>
                          <td className="align-middle">{mapData.name}</td>
                          <td className="align-middle">{mapData.email}</td>
                          <td className="align-middle">{mapData.wordsLearned}</td>
                          <td className="align-middle">{mapData.lessonsCompleted}</td>
                        </tr>
                      </>
                    );
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </>
  );
};
