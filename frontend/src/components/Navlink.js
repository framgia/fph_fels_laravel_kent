import { NavLink } from "react-router-dom";

export default function Navlink() {
  return (
    <>
      <li className="nav-item text-center">
        <NavLink
          className="text-dark nav-item text-center p-2 navLink"
          to="/login"
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            fontStyle: "italic"
          }}
        ><i className="bi bi-door-open pr-1"></i>Login</NavLink>
        <NavLink
          className="text-dark nav-item text-center p-2 navLink"
          to="/register"
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            fontStyle: "italic"
          }}
        ><i className="bi bi-person-plus pr-1"></i>Register</NavLink>
      </li>
    </>
  );
};
