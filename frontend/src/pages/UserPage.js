import Head from "../components/Head";
import NavbarTemplate from "../components/NavbarTemplate";
import User from "../features/user/User";

const UserPage = () => {

  return (
    <>
      <Head title="Users | E-Learning System" />

      <NavbarTemplate navClass="navbar navbar-expand-lg navbar-light bg-white wrapper fixed-top profileNavigation" />

      <User />
    </>
  );
};

export default UserPage;
