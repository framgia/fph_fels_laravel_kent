import { NavLink } from "react-router-dom";

import styles from './Navlink.module.css'

const Navlink = () => {
  return (
    <>
      <li className="nav-item text-center">
        <NavLink
          className={`text-dark nav-item text-center p-2 nav-link ${styles.navLink}`}
          to="/login"
          activeStyle={{
            fontWeight: "bold",
            color: "black"
          }}
        ><i className="bi bi-door-open pr-1"></i>Login</NavLink>
      </li>
      <li className="nav-item text-center">
        <NavLink
          className={`text-dark nav-item text-center p-2 nav-link ${styles.navLink}`}
          to="/register"
          activeStyle={{
            fontWeight: "bold",
            color: "black"
          }}
        ><i className="bi bi-person-plus pr-1"></i>Register</NavLink>
      </li>
    </>
  );
};

export default Navlink;
