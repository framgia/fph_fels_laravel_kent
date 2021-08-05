import { Jumbotron, Row, Col, Image, Table } from 'react-bootstrap';

import Head from '../components/Head';
import MainNavlink from '../components/MainNavlink';
import User from '../images/defaultProfile.png';
import ActivitiesData from '../dummy-data/activities';
import WordsLearned from '../dummy-data/words-learned';
import LessonsCompleted from '../dummy-data/lessons-completed';
import Footer from '../components/Footer';

export default function DashboardPage() {
  return (
    <>
      <Head title="Dashboard | E-Learning System" />

      <nav className="navbar navbar-expand-lg navbar-light bg-white wrapper">
        <a className="navbar-brand headerFont font-weight-bolder my-3" href="/dashboard"><span className="p-3 rounded-lg border border-dark brandName">E-Learning System</span></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <MainNavlink />
          </ul>
        </div>
      </nav>

      <Jumbotron className="wrapper bg-dark">
        <Col xs={6} md={4} className="dashboardImage">
          <Image width={171} height={180} src={User} thumbnail/>
          <div className="profileContainer">
            <h2 className="text-white font-weight-bold ml-3">John Doe</h2>
            <h6 className="text-white ml-3">Learned 20 Words</h6>
            <h6 className="text-white ml-3">Learned 10 Lessons</h6>
          </div>
        </Col>
      </Jumbotron>

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
                    WordsLearned.map((mapData) => {
                      return (
                        <>
                          <tr>
                            <td>{mapData.japanese}</td>
                            <td>{mapData.english}</td>
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
                  LessonsCompleted.map((mapData) => {
                    return (
                      <>
                        <tr>
                          <td>{mapData.name}</td>
                          <td>{mapData.date}</td>
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
    
    <Footer footerClass="text-center border-top pt-5 pb-5 mt-5 wrapper" />
    </>
  );
};
