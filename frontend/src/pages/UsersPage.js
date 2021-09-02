import { Container, Table } from 'react-bootstrap';

import NavbarTemplate from "../components/NavbarTemplate";
import Head from "../components/Head";
import Users from '../features/users/Users';

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
          <Users />
        </Table>
      </Container>
    </>
  );
};
