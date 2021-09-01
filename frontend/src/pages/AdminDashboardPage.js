import { Container, Jumbotron, Col, Image } from 'react-bootstrap';

import AdminNavbarTemplate from '../components/AdminNavbarTemplate';
import Head from '../components/Head';
import defaultProfile from '../images/defaultProfile.png';

export default function AdminDashboardPage() {
  return (
    <>
      <Head title="Admin Dashboard | E-Learning System" />

      <AdminNavbarTemplate navClass="navbar navbar-expand-lg navbar-light bg-white wrapper"/>

      <Container className="wrapper mt-2">
        <Jumbotron className="bg-dark">
          <Col xs={6} md={4} className="dashboardImage">
            <Image 
              className="dashboardThumbnail" 
              width={171} 
              height={180} 
              src={defaultProfile}
            />
            <div className="profileContainer">
              <h2 className="text-white font-weight-bold ml-3">Kent Louise Tonino</h2>
              <h6 className="text-white ml-3 font-italic">Email : kenttonino@email.com</h6>
              <h6 className="text-white ml-3 font-italic">Type : Admin</h6>
            </div>
          </Col>
        </Jumbotron>
      </Container>
    </>
  );
};
