import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';

import UserAuthApi from "../helpers/UserAuthApi";
import { getFollowings } from '../redux/actions/userActions';

export default function MainNavlink() {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');

  function logoutUser(e) {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    
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

  function profileState(e) {
    e.preventDefault();

    UserAuthApi.getFollowings(id).then(res => res.json()).then(data => {
      dispatch(getFollowings(data));
      history.push(`/profile/${id}`);
    });
  }

  return (
    <>
      <li className="nav-item text-center">
        <NavLink
          className="text-dark nav-item text-center p-2 navLink nav-link"
          to={`/dashboard/${id}`}
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
          to="/categories"
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            fontStyle: "italic"
          }}
        ><i className="bi bi-person pr-2"></i>Users</NavLink>
      </li>
      <li className="nav-item text-center">
        <NavLink
          className="text-dark nav-item text-center p-2 navLink nav-link"
          to={`/profile/${id}`}
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            fontStyle: "italic"
          }}
          onClick={e => profileState(e)}
        ><i className="bi bi-people pr-2"></i>Profile</NavLink>
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
