import { Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Head from '../components/Head';
import AdminNavbarTemplate from '../components/AdminNavbarTemplate';
import AdminCategoriesData from '../dummy-data/AdminCategoriesData';
import AdminCategoriesTable from '../components/AdminCategoriesTable';

export default function AdminCategoriesPage() {
  return (
    <>
      <Head title="Admin: Categories | E-Learning System" />

      <AdminNavbarTemplate navClass="navbar navbar-expand-lg navbar-light bg-white wrapper"/>

      <Container className="wrapper mt-2">
        <h1 className="text-center py-2 text-white bg-dark font-weight-bold rounded">Categories</h1>

        <Row className="wrapper mt-4">
          <Link 
            className="mb-4 btn btn-primary" 
            to="/admin/categories/add"
            >Add Category
          </Link>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                AdminCategoriesData.map((data) => (
                  <AdminCategoriesTable 
                    title={data.title}
                    description={data.description}
                    toAdd="/admin/categories"
                    toEdit="/admin/categories"
                    toDelete="/admin/categories"
                  />
                ))
              }
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};
