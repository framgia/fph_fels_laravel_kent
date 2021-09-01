import { Link } from 'react-router-dom';

import NavButton from './NavButton';
import MainNavlink from './MainNavlink';

export default function NavbarTemplate(props) {
  
  return (
    <>
        <nav className={props.navClass}>
          <Link className="navbar-brand headerFont font-weight-bolder my-3" to="/dashboard">
            <span className="p-3 rounded-lg border border-dark brandName">E-Learning System</span>
          </Link>
          <NavButton />
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <MainNavlink />
            </ul>
          </div>
        </nav>
    </>
  );
};
