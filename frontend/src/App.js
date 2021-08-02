import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import LandingPage from './pages/LandingPage';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
