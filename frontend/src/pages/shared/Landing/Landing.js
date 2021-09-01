import ParticlesBg from 'particles-bg';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Head from '../../../shared/Head/Head';
import CardTemplate from '../../../shared/CardTemplate/CardTemplate';
import Footer from '../../../shared/Footer/Footer';
import NavbarToggle from '../../../shared/NavbarToggle/NavbarToggle';
import Navlink from '../../../shared/Navlink.js/Navlink';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <>
      <Head title="Home | E-Learning System" />

      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-dark wrapper">
        <Link className="navbar-brand font-weight-bold my-3" to="/">
          <span className={`p-3 rounded-lg border border-dark ${styles.brandName}`}>E-Learning System</span>
        </Link>
        <NavbarToggle />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Navlink />
          </ul>
        </div>
      </nav>

      <Jumbotron className="text-center mt-5 bg-warning wrapper">
        <h1 className={`mt-5 ${styles.jumbotronHeader}`}>Welcome to E-Learning System</h1>
        <p className={`mb-5 font-italic ${styles.jumbotronText}`}>- The best way to learn a new language -</p>
        <Link className={`btn btn-warning font-weight-bold ${styles.jumbotronButton}`} to="/register">Join Us</Link>
      </Jumbotron>

      <div className="container-fluid wrapper mb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 w-100">
              <CardTemplate cardClass="mt-5 bg-dark text-white border-0" title="Easy to Use" text="Straightforward and direct to the point instruction." />
            </div>
            <div className="col-md-6">
              <CardTemplate cardClass="mt-5" title="User Friendly" text="Convenient with simple user inteface." />
            </div>
            <div className="col-md-6">
              <CardTemplate cardClass="mt-5" title="100% Free" text="No need to pay, just use it right away." />
            </div>
            <div className="col-md-6">
              <CardTemplate cardClass="mt-5 bg-dark text-white mb-4 border-0" title="No Hassle" text="No ads and free from distraction."/>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-warning text-center border-0 mb-5 mt-5 wrapper">
        <div className={`card-body ${styles.cardQuote}`}>
          <blockquote className="blockquote mb-0">
            <p className="font-italic text-body text-white">"The beautiful thing about learning is that nobody can take it away from you."</p>
            <footer className="blockquote-footer text-black">B.B. King</footer>
          </blockquote>
        </div>
      </div>

      <Footer footerClass="text-center border-top pt-5 pb-5 mt-5 wrapper"/>
      <ParticlesBg type="cobweb" bg={true} />
    </>
  );
};

export default Landing;
