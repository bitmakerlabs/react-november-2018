import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

import './App.css';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Nav from './Nav';
import NotFound from './404';

class App extends Component {

  render() {
    return (
      <div>
      <p> logo here!! </p>
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/404" />
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
