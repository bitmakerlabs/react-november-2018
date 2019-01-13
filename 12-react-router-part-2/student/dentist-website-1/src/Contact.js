import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import FormType from './FormType';

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contact</h1>

        <Router>
        <div>
          <Link to="/forms"> Form </Link>
          <Link to="/telephoneNumber"> call us </Link>

          <Route path="/:formType" component={FormType} />
        </div>
        </Router>
      </div>
    );
  }
}

export default Contact;
