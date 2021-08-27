import { Container, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getProfile } from "./profileSlice";
import defaultProfile from '../../images/defaultProfile.png';
import SpinnerTemplate from '../../components/SpinnerTemplate';

const Profile = () => {
  const id = localStorage.getItem('id');
  const dispatch = useDispatch();
  const dashboardIndex = useSelector((state) => state.dashboard.index);
  const { status, index } = useSelector((state) => state.profile);
  const { student, words_count, lesson_learned_count, activities } = dashboardIndex;

  useEffect(() => {
    dispatch(getProfile(id));
  }, [ dispatch, id ]);
  
  const ProfileDetails = () => {
    if(status === 'loading' || status === null) {
      return (
        <SpinnerTemplate />
      );
    } else {
      return (
        <>
          <Container className="wrapper sidenavParent">
            <div className="sidenav mt-0">
              <Container className="container-sm px-5 pt-5 pb-0 text-center text-white">
                <p className="mb-5 rainbow">
                  <img 
                    src={student.thumbnail !== null ? process.env.REACT_APP_THUMBNAIL + student.thumbnail : defaultProfile} 
                    className="profileImage" 
                    alt=".."
                  ></img>
                </p>
              </Container>

              <Container className="text-center bg-success text-white">
                <p className="mb-0 p-3 sidenavP">{index.followers.length} <span className="sidenavFollow">followers</span></p>
                <p className="mb-0 p-3 sidenavP">{index.followings.length} <span className="sidenavFollow">followings</span></p>
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
                <Link className="btn btn-dark btn-lg btn-block sidenavButton font-weight-light" to="/profile/update">Update Profile</Link>
              </Container>
            </div>

            <div className="main">
              <div className="my-5">
                <h5 className="bg-dark text-center pb-2 pt-2 text-light font-weight-bold font-italic">Activities</h5>
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
                      index.followings.map((following) => (
                        <tr key={following.id} className="text-center">
                          <td className="align-middle">
                            <img 
                              src={following.thumbnail !== null ? process.env.REACT_APP_THUMBNAIL + following.thumbnail : defaultProfile} className="rounded-circle" 
                              width={50} 
                              height="50" 
                              alt="avatar">
                            </img>
                          </td>
                          <td className="align-middle">{following.name}</td>
                          <td className="align-middle">{following.email}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
              </div>

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
                      index.followers.map((follower) => (
                        <tr key={follower.id} className="text-center">
                          <td className="align-middle">
                            <img src={follower.thumbnail !== null ? process.env.REACT_APP_THUMBNAIL + follower.thumbnail : defaultProfile}  className="rounded-circle" width={50} height={50} alt="avatar"></img>
                          </td>
                          <td className="align-middle">{follower.name}</td>
                          <td className="align-middle">{follower.email}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
              </div>
            </div>
          </Container>
        </>
      );
    }
  };

  return (
    <>
      <ProfileDetails />
    </>
  );
};

export default Profile;
