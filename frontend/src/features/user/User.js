import { Container, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { getStudent } from './userSlice';
import { getProfile } from '../profile/profileSlice';
import { getDashboard } from '../dashboard/dashboardSlice';
import defaultProfile from '../../images/defaultProfile.png';
import SpinnerTemplate from '../../components/SpinnerTemplate';
import UserAuthApi from '../../helpers/UserAuthApi';

const User = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedId = localStorage.getItem('id');
  const { id } = useParams();
  const { activities, words_learned } = useSelector((state) => state.dashboard.index);
  const { status, student } = useSelector((state) => state.user);
  const { index } = useSelector((state) => state.profile);
  const [ followButton, setFollowButton ] = useState('Follow');

  useEffect(() => {
    dispatch(getStudent(id));
    dispatch(getProfile(id));
    dispatch(getDashboard(id));
  }, [ dispatch, id ]);

  useEffect(() => {
    for(let i = 0; i < index.followers.length; i++) {
      if (index.followers[i].id === parseInt(loggedId)) {
        setFollowButton('Unfollow');
        break;
      } else {
        setFollowButton('Follow');
      }
    }
  }, [ followButton, index.followers, loggedId ]);

  function followChange(e) {
    e.preventDefault(e);

    const payload = {
      loggedId: loggedId,
      id: id
    };

    if(followButton === 'Follow') {
      UserAuthApi.follow(payload).then(res => res.json()).then(data => {
        Swal.fire(
          '',
          `You have successfully followed ${student.student.name}`,
          'success'
        ).then(() => {
          setFollowButton('Unfollow');
          dispatch(getProfile(id));
          history.push(`/users/${id}`);
        });
      });
    }

    if(followButton === 'Unfollow') {
      UserAuthApi.unfollow(payload).then(res => res.json()).then(data => {
        Swal.fire(
          '',
          `You have successfully unfollow ${student.student.name}`,
          'success'
        ).then(() => {
          setFollowButton('Follow');
          dispatch(getProfile(id));
          history.push(`/users/${id}`);
        });
      });
    }
  };

  const UserDetails = () => {
    if(status === 'loading' || status === null) {
      return <SpinnerTemplate />;
    } else {

      // words learned new array.
      const wordsLearned = [];
      for(let i = 0; i < words_learned.japanese.length; i++) {
        wordsLearned.push({japanese: words_learned.japanese[i], english: words_learned.english[i]});
      }

      return (
        <Container className="wrapper sidenavParent">
          <div className="sidenav mt-0">
            <Container className="container-sm px-5 pt-5 pb-0 text-center text-white">
              <p className="mb-5 rainbow">
              <img 
                src={student.student.thumbnail !== null ? process.env.REACT_APP_API + student.student.thumbnail : defaultProfile} 
                className="profileImage" 
                alt=".."
              ></img>
              </p>
            </Container>

            <Container className="text-center bg-success text-white">
              <p className="mb-0 p-3 sidenavP">{index.followers.length}<span className="sidenavFollow">followers</span></p>
              <p className="mb-0 p-3 sidenavP">{index.followings.length}<span className="sidenavFollow">following</span></p>
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
                    <td className="font-weight-bold">{student.student.name}</td>
                  </tr>
                  <tr className="text-dark">
                    <td className="font-italic">Username</td>
                    <td className="font-weight-bold">{student.student.username}</td>
                  </tr>
                  <tr className="text-dark">
                    <td className="font-italic">Email</td>
                    <td className="font-weight-bold">{student.student.email}</td>
                  </tr>
                </tbody>
              </table>
            </Container>

            <Container className="mt-5">
              <button 
                onClick={e => followChange(e)} 
                className="btn btn-primary btn-lg btn-block sidenavButton font-weight-light"
              >{followButton}</button>
              <Link className="btn btn-dark btn-lg btn-block sidenavButton font-weight-light mt-3" to="/users">Go Back</Link>
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
              <h5 className="bg-dark text-center pb-2 pt-2 text-light font-weight-bold font-italic">Words Learned</h5>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Japanese</th>
                    <th>English</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    wordsLearned.map((word) => {
                      return (
                        <>
                          <tr>
                            <td>{word.japanese}</td>
                            <td>{word.english}</td>
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
      );
    }
  };

  return (
    <>
      <UserDetails />
    </>
  );
};

export default User;
