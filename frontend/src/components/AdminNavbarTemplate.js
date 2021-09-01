import { Link } from 'react-router-dom';

import NavButton from './NavButton';
import AdminNavlink from './AdminNavlink';

export default function AdminNavbarTemplate(props) {
  
  return (
    <>
      <nav className={props.navClass}>
        <Link className="navbar-brand headerFont font-weight-bolder my-3" to="/admin/dashboard">
          <span className="p-3 rounded-lg border border-dark brandName">E-Learning System</span>
        </Link>
        <NavButton />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <AdminNavlink />
          </ul>
        </div>
      </nav>
    </>
  );
};
