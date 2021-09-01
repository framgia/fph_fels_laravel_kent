import { Row, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Head from '../components/Head';
import AdminNavbarTemplate from '../components/AdminNavbarTemplate';

export default function AdminAddCategoryPage() {
  return (
    <>
      <Head title="Admin: Add Category | E-Learning System" />

      <AdminNavbarTemplate navClass="navbar navbar-expand-lg navbar-light bg-white wrapper"/>

      <Container className="wrapper mt-2">
        <h1 className="text-center py-2 text-white bg-dark font-weight-bold rounded">Add Category</h1>

        <Row className="wrapper mt-5 justify-content-center">
          <form style={{'width': '30rem'}}>
            <div className="form-group font-it">
              <label for="exampleFormControlInput1">Title</label>
              <input 
                type="text" 
                class="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Enter category title here" 
              />
            </div>
            <div className="form-group mb-3">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea 
                style={{'height': '15rem'}}
                className="form-control" 
                id="exampleFormControlTextarea1" 
                placeholder="Enter category description here"
                rows="3">
              </textarea>
            </div>

            <Button className="btn-block mt-5">Submit</Button>

            <Link to="/admin/categories" className="btn btn-secondary btn-block mt-3">Cancel</Link>
          </form>
        </Row>
      </Container>
    </>
  );
};
