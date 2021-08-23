import { Jumbotron, Row, Col, Image, Table, Container } from 'react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';

import Head from '../components/Head';
import defaultProfile from '../images/defaultProfile.png';
import NavbarTemplate from '../components/NavbarTemplate';

export default function DashboardPage() {
  const resource = useSelector((state) => state.allResource.resource);
  const { student, words_count, lesson_learned_count, activities, lesson_completed, words_learned } = resource;

  const wordsLearned = [];
  for(let i = 0; i < words_learned.japanese.length; i++) {
    wordsLearned.push({japanese: words_learned.japanese[i], english: words_learned.english[i]});
  }

  return (
    <>
      <Head title="Dashboard | E-Learning System" />

      <NavbarTemplate navClass="navbar navbar-expand-lg navbar-light bg-white wrapper"/>
        
      <Container className="wrapper mt-2">
        <Jumbotron className="bg-dark">
          <Col xs={6} md={4} className="dashboardImage">
            <Image className="dashboardThumbnail" width={171} height={180} src={student.thumbnail !== null ? process.env.REACT_APP_THUMBNAIL + student.thumbnail : defaultProfile}/>
            <div className="profileContainer">
              <h2 className="text-white font-weight-bold ml-3">{student.name}</h2>
              <h6 className="text-white ml-3">Learned {words_count} Words</h6>
              <h6 className="text-white ml-3">Learned {lesson_learned_count} Lessons</h6>
            </div>
          </Col>
        </Jumbotron>
      </Container>

      {/* activities */}
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

          {/* words learned */}
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
          
          {/* lessons completed */}
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
};
