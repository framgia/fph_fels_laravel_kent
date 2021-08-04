import Head from '../components/Head';
import Navlink from '../components/Navlink';
import CardTemplate from '../components/CardTemplate';
import Footer from '../components/Footer';
import ParticlesBg from 'particles-bg';
import { 
  Jumbotron,
} from 'react-bootstrap';

const LandingPage = () => {
  return (
    <>
      <Head title="Home | E-Learning System" />

      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-dark wrapper">
        <a className="navbar-brand font-weight-bold" href="/">E-Learning System</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Navlink />
          </ul>
        </div>
      </nav>

      <Jumbotron className="text-center mt-5 bg-warning wrapper">
        <h1 className="font-weight-bold mt-5">Welcome to E-Learning System</h1>
        <p className="mb-5">The best way to learn a new language. Join us now.</p>
      </Jumbotron>

      <div className="container-fluid wrapper mb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 w-100">
              <CardTemplate cardClass="mt-5 bg-dark text-white" title="Easy to Use" text="Straightforward and direct to the point instruction." />
            </div>
            <div className="col-md-6">
              <CardTemplate cardClass="mt-5 bg-primary text-white" title="User Friendly" text="Convenient with simple user inteface." />
            </div>
            <div className="col-md-6">
              <CardTemplate cardClass="mt-5" title="100% Free" text="No need to pay, just use it right away." />
            </div>
            <div className="col-md-6">
              <CardTemplate cardClass="mt-5 bg-danger text-white mb-4" title="No Hassle" text="No ads and free from distraction. Register now."/>
            </div>
          </div>
        </div>
      </div>

      <div className="card wrapper text-center border-left-0 border-right-0 mb-5 mt-5">
        <div className="card-body cardQuote">
          <blockquote className="blockquote mb-0">
            <p className="font-italic text-body font-weight-light">"The beautiful thing about learning is that nobody can take it away from you."</p>
            <footer className="blockquote-footer">- B.B. King</footer>
          </blockquote>
        </div>
      </div>

      <Footer footerClass="text-center border-top pt-5 pb-5 mt-5"/>
      <ParticlesBg type="cobweb" bg={true} />
    </>
  );
};

export default LandingPage;
