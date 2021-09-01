import { NavLink, useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

import UserAuthApi from "../helpers/UserAuthApi";

export default function MainNavlink() {
  const token = localStorage.getItem('token');
  const history = useHistory();

  function logoutUser(e) {
    e.preventDefault();
    
    UserAuthApi.logout(token).then(res => res.json()).then(data => {
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
          className="text-dark nav-item text-center p-2 navLink nav-link"
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
          className="text-dark nav-item text-center p-2 navLink nav-link"
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
          className="text-dark nav-item text-center p-2 navLink nav-link"
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
          className="text-dark nav-item text-center p-2 navLink nav-link"
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
          className="text-dark nav-item text-center p-2 navLink nav-link"
          activeStyle={{
          }}
          onClick={e => logoutUser(e)}
        ><i className="bi bi-box-arrow-right pr-2"></i>Logout</NavLink>
      </li>
    </>
  );
};
