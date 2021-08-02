export default function Navlink(props) {
  return (
    <>
      <li className="nav-item text-center">
<<<<<<< HEAD
        <a className="nav-link navLink" href={props.navLink}>{props.icon}{props.navName}</a>
=======
        <a className={props.navClass} href={props.navLink}>{props.icon}{props.navName}</a>
>>>>>>> 35ddf48 (added: register page)
      </li>
    </>
  );
}