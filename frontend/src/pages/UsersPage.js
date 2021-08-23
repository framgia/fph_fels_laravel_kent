import { Container, Table } from 'react-bootstrap';

import NavbarTemplate from "../components/NavbarTemplate";
import Head from "../components/Head";
import UsersListData from '../dummy-data/UsersListData';
import defaultProfile from '../images/defaultProfile.png';

export default function UsersPage() {
  return (
    <>
      <Head title="Users | E-Learning System" />
      <NavbarTemplate navClass="navbar navbar-expand-lg navbar-light bg-white wrapper fixed-top profileNavigation" />

      <Container className="wrapper sidenavParent">
        <Table striped bordered hover>
          <thead>
            <tr className="text-center bg-dark text-white">
              <th >Avatar</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              UsersListData.map((user) => (
                <tr key={user.id}>
                  <td className="text-center align-middle">
                    <img width={50} heigh={50} className="rounded-circle" src={defaultProfile} alt="Avatar"></img>
                  </td>
                  <td className="align-middle">{user.name}</td>
                  <td className="align-middle">{user.username}</td>
                  <td className="align-middle">{user.email}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>
    </>
  );
};
