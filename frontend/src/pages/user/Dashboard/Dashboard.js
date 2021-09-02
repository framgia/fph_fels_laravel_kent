import { Container, Jumbotron, Col, Image, Table, Row } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDashboard } from '../../../features/dashboard/dashboardSlice';
import defaultProfile from '../../../images/defaultProfile.png';
import Spinner from '../../../shared/Spinner/Spinner';
import Head from '../../../shared/Head/Head';
import NavbarUser from '../../../shared/NavbarUser/NavbarUser';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const id = localStorage.getItem('id');
  const { dashboard, status } = useSelector((state) => state.dashboard);
  const { student, words_count, lesson_learned_count, activities, lesson_completed, words_learned } = dashboard;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboard(id));
  }, [ dispatch, id ]);

  const DashboardDetails = () => {
    if(status === 'loading' || status === null) {
      return (
        <Spinner />
      );
    } else {
      const wordsLearned = [];

      for(let i = 0; i < words_learned.japanese.length; i++) {
        wordsLearned.push({japanese: words_learned.japanese[i], english: words_learned.english[i]});
      }

      return (
        <>
          <Head title="Dashboard | E-Learning System" />

          <NavbarUser navClass="navbar navbar-expand-lg navbar-light bg-white wrapper"/>

          <Container className="wrapper mt-2">
            <Jumbotron className="bg-dark">
              <Col xs={6} md={4} className="dashboardImage">
                <Image 
                  className="dashboardThumbnail" 
                  width={171} 
                  height={180} 
                  src={student.thumbnail !== null ? process.env.REACT_APP_THUMBNAIL + student.thumbnail : defaultProfile}
                />
                <div className="profileContainer">
                  <h2 className={`text-white ml-3 ${styles.fontWeight900}`}>{student.name}</h2>
                  <h6 className="text-white ml-3 text-warning">Learned Words | {words_count}</h6>
                  <h6 className="text-white ml-3 text-warning">Learned Lessons | {lesson_learned_count}</h6>
                </div>
              </Col>
            </Jumbotron>
          </Container>

          <div className="dashboardWrapper my-5">
            <h4 className={`bg-warning text-center p-3 text-black ${styles.fontWeight900}`}>Activities</h4>
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
                    <tr key={activity.id}>
                      <td>{activity.activity_type}</td>
                      <td>{activity.updated_at}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        
          <div className="dashboardWrapper my-5">
            <Row>
              <Col className="">
                <h4 className={`bg-dark text-center p-3 text-white ${styles.fontWeight900}`}>Words Learned</h4>
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
              </Col>
              
              <Col>
                <h4 className={`bg-dark text-center p-3 text-white ${styles.fontWeight900}`}>Lessons Completed</h4>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Lesson</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      lesson_completed.map((lesson) => {
                        return (
                          <>
                            <tr>
                              <td>{lesson.description}</td>
                              <td>{lesson.updated_at}</td>
                            </tr>
                          </>
                        );
                      })
                    }
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </>
      );
    }
  };

  return (
    <DashboardDetails />
  );
};

export default Dashboard;
