import NavButton from './NavButton';
import MainNavlink from './MainNavlink';

export default function NavbarTemplate(props) {
  const id = localStorage.getItem('id');

  return (
    <>
        <nav className={props.navClass}>
          <a className="navbar-brand headerFont font-weight-bolder my-3" href={`/dashboard/${id}`}><span className="p-3 rounded-lg border border-dark brandName">E-Learning System</span></a>
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
