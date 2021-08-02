export default function Navlink(props) {
  return (
    <>
      <li className="nav-item text-center">
        <a className="nav-link navLink" href={props.navLink}>{props.icon}{props.navName}</a>
      </li>
    </>
  );
}