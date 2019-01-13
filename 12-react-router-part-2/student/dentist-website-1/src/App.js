import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
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
      <p> logo here 😂 </p>
      <BrowserRouter>
        <Switch>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={() => <About userName={'hello world'} /> }/>
            <Route path="/contact" component={Contact} />

            </div>
          </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
