import { NavLink, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import StudentAPI from '../../api/StudentAPI';
import styles from './NavlinkUser.module.css';

const NavlinkUser = () => {
  const token = localStorage.getItem('token');
  const history = useHistory();

  const logoutUser = (e) => {
    e.preventDefault();
    
    StudentAPI.logout(token).then(res => res.json()).then(() => {
      Swal.fire(
        'Goodbye',
        'You have successfully logged out your account',
        'success'
      ).then(() => {
        localStorage.clear();
        history.push('/login');
      });
    });
  };

  return (
    <>
      <li className="nav-item text-center">
        <NavLink
          className={`text-dark nav-item text-center p-2 nav-link ${styles.navLink}`}
          to="/dashboard"
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            fontStyle: "italic"
          }}
        ><i className="bi bi-house pr-2"></i>Dashboard</NavLink>
      </li>
      <li className="nav-item text-center">
        <NavLink
          className={`text-dark nav-item text-center p-2 nav-link ${styles.navLink}`}
          to="/categories"
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            fontStyle: "italic"
          }}
        ><i className="bi bi-collection pr-2"></i>Categories</NavLink>
      </li>
      <li className="nav-item text-center">
        <NavLink
          className={`text-dark nav-item text-center p-2 nav-link ${styles.navLink}`}
          to="/users"
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            fontStyle: "italic"
          }}
        ><i className="bi bi-people pr-2"></i>Users</NavLink>
      </li>
      <li className="nav-item text-center">
        <NavLink
          className={`text-dark nav-item text-center p-2 nav-link ${styles.navLink}`}
          to="/profile"
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            fontStyle: "italic"
          }}
        ><i className="bi bi-person pr-2"></i>Profile</NavLink>
      </li>
      <li className="nav-item text-center">
        <NavLink
          to="/"
          className={`text-dark nav-item text-center p-2 nav-link ${styles.navLink}`}
          activeStyle={{
          }}
          onClick={e => logoutUser(e)}
        ><i className="bi bi-box-arrow-right pr-2"></i>Logout</NavLink>
      </li>
    </>
  );
};

export default NavlinkUser;
