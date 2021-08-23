import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Head from '../components/Head';
import NavButton from '../components/NavButton';
import MainNavlink from '../components/MainNavlink';
import defaultProfile from '../images/defaultProfile.png';
import ServerPath from '../helpers/ServerPath';

export default function ProfilePage() {
  const id = localStorage.getItem('id');
  const resource = useSelector((state) => state.allResource.resource);
  const followings = useSelector((state) => state.followingsData.followings);
  const { student, activities, words_count, lesson_learned_count } = resource;

  return (
    <>
      <Head title="Profile | E-Learning System" />

      <nav className="navbar navbar-expand-lg navbar-light bg-white wrapper fixed-top profileNavigation">
        <a className="navbar-brand headerFont font-weight-bolder my-3" href={`/dashboard/${id}`}>
          <span className="p-3 rounded-lg border border-dark brandName">E-Learning System</span>
        </a>
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
              <img src={student.thumbnail !== null ? ServerPath.thumbnail+student.thumbnail : defaultProfile} className="profileImage" alt=".."></img>
            </p>
          </Container>

          <Container className="text-center bg-success text-white">
            <p className="mb-0 p-3 sidenavP">{followings !== undefined? followings.followers.length : ''} <span className="sidenavFollow">followers</span></p>
            <p className="mb-0 p-3 sidenavP">{followings !== undefined? followings.followings.length : ''} <span className="sidenavFollow">following</span></p>
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

          <Container className="mt-5">
            <Link className="btn btn-dark btn-lg btn-block sidenavButton font-weight-light" to={`/profile/update/${id}`}>Update Profile</Link>
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
                  activities.map((activity) => (
                    <tr>
                      <td>{activity.description}</td>
                      <td>{activity.date}</td>
                    </tr>
                  ))
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
                </tr>
              </thead>
              <tbody>
                {
                  followings.followings.map((following) => {
                    return (
                      <>
                        <tr className="text-center">
                          <td className="align-middle">
                            <img 
                              src={following.thumbnail !== null ? ServerPath.thumbnail+following.thumbnail : defaultProfile} className="rounded-circle" 
                              width={50} 
                              height="50" 
                              alt="avatar">
                            </img>
                          </td>
                          <td className="align-middle">{following.name}</td>
                          <td className="align-middle">{following.email}</td>
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
                </tr>
              </thead>
              <tbody>
                {
                  followings.followers.map((followers) => {
                    return (
                      <>
                        <tr className="text-center">
                          <td className="align-middle">
                            <img src={followers.thumbnail !== null ? ServerPath.thumbnail+followers.thumbnail : defaultProfile}  className="rounded-circle" width={50} height={50} alt="avatar"></img>
                          </td>
                          <td className="align-middle">{followers.name}</td>
                          <td className="align-middle">{followers.email}</td>
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
