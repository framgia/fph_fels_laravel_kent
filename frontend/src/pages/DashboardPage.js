import { Jumbotron, Row, Col, Image, Table } from 'react-bootstrap';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getResource } from '../redux/actions/userActions';
import UserAuthApi from '../helpers/UserAuthApi';
import Head from '../components/Head';
import MainNavlink from '../components/MainNavlink';
import defaultProfile from '../images/defaultProfile.png';
import NavButton from '../components/NavButton';
import Footer from '../components/Footer';

export default function DashboardPage() {
  const id = localStorage.getItem('id');
  const resource = useSelector((state) => state.allResource.resource);
  const dispatch = useDispatch();

  UserAuthApi.getAll(id).then(res => res.json()).then(data => {
    dispatch(getResource(data));
  });

  // destructured fetched data from backend
  const studentInfo = resource.student;
  const wordsCount = resource.words_count;
  const lessonsLearnedCounts = resource.lesson_learned_count;
  const activities = resource.activities;
  const lessonCompleted = resource.lesson_completed;
  const japaneseWord = resource.words_learned.japanese;
  const englishWord = resource.words_learned.english;
  const thumbnail = studentInfo.thumbnail != null;

  const wordsLearned = [];
  for(let i = 0; i < japaneseWord.length; i++) {
    wordsLearned.push({japanese: japaneseWord[i], english: englishWord[i]});
  }

  return (
    <>
      <Head title="Dashboard | E-Learning System" />

      <nav className="navbar navbar-expand-lg navbar-light bg-white wrapper">
        <a className="navbar-brand headerFont font-weight-bolder my-3" href="/dashboard"><span className="p-3 rounded-lg border border-dark brandName">E-Learning System</span></a>
        <NavButton />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <MainNavlink />
          </ul>
        </div>
      </nav>

      <Jumbotron className="wrapper bg-dark">
        <Col xs={6} md={4} className="dashboardImage">
          <Image width={171} height={180} src={thumbnail? studentInfo.thumbnail : defaultProfile} thumbnail/>
          <div className="profileContainer">
            <h2 className="text-white font-weight-bold ml-3">{studentInfo.name}</h2>
            <h6 className="text-white ml-3">Learned {wordsCount} Words</h6>
            <h6 className="text-white ml-3">Learned {lessonsLearnedCounts} Lessons</h6>
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
              activities.map((mapData) => {
                return (
                  <>
                    <tr>
                      <td>{mapData.activity_type}</td>
                      <td>{mapData.updated_at}</td>
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
                    wordsLearned.map((mapData) => {
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
                  lessonCompleted.map((mapData) => {
                    return (
                      <>
                        <tr>
                          <td>{mapData.description}</td>
                          <td>{mapData.updated_at}</td>
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
