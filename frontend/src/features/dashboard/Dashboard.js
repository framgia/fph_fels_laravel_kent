import { Container, Jumbotron, Col, Image, Table, Row } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDashboard } from './dashboardSlice';
import defaultProfile from '../../images/defaultProfile.png';
import SpinnerTemplate from '../../components/SpinnerTemplate';

const Dashboard = () => {
  const id = localStorage.getItem('id');
  const { index, status } = useSelector((state) => state.dashboard);
  const { student, words_count, lesson_learned_count, activities, lesson_completed, words_learned } = index;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboard(id));
  }, [ dispatch, id ]);

  const DashboardDetails = () => {
    if(status === 'loading' || status === null) {
      return (
        <SpinnerTemplate />
      );
    } else {
      const wordsLearned = [];

      for(let i = 0; i < words_learned.japanese.length; i++) {
        wordsLearned.push({japanese: words_learned.japanese[i], english: words_learned.english[i]});
      }

      return (
        <>
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
                  <h2 className="text-white font-weight-bold ml-3">{student.name}</h2>
                  <h6 className="text-white ml-3">Learned {words_count} Words</h6>
                  <h6 className="text-white ml-3">Learned {lesson_learned_count} Lessons</h6>
                </div>
              </Col>
            </Jumbotron>
          </Container>

          <div className="dashboardWrapper my-5">
            <h4 className="bg-success text-center p-3 text-light font-weight-bold">Activities</h4>
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
                <h4 className="bg-primary text-center p-3 text-light font-weight-bold">Words Learned</h4>
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
                <h4 className="bg-warning text-center p-3 text-light font-weight-bold">Lessons Completed</h4>
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
