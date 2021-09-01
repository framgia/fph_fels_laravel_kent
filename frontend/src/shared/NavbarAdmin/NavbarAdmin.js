import { Link } from 'react-router-dom';

import NavlinkAdmin from '../NavlinkAdmin.js/NavlinkAdmin';
import NavbarToggle from '../NavbarToggle/NavbarToggle';
import styles from './NavbarAdmin.module.css';

const NavbarAdmin = (props) => {
  
  return (
    <>
      <nav className={props.navClass}>
        <Link className="navbar-brand headerFont font-weight-bolder my-3" to="/admin/dashboard">
          <span className={`p-3 rounded-lg border border-dark ${styles.brandName}`}>E-Learning System</span>
        </Link>
        <NavbarToggle />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <NavlinkAdmin />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarAdmin;

