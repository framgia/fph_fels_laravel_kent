import { Link } from 'react-router-dom';

import NavbarToggle from '../NavbarToggle/NavbarToggle';
import NavlinkUser from '../NavlinkUser/NavlinkUser';
import styles from './NavbarUser.module.css';

export default function NavbarTemplate(props) {
  
  return (
    <>
        <nav className={props.navClass}>
          <Link className="navbar-brand font-weight-bolder my-3" to="/dashboard">
          <span className={`p-3 rounded-lg border border-dark ${styles.brandName}`}>E-Learning System</span>
          </Link>
          <NavbarToggle />
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <NavlinkUser />
            </ul>
          </div>
        </nav>
    </>
  );
};
