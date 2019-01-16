import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ControlledNameForm from './ControlledNameForm'
import UncontrolledNameForm from './UncontrolledNameForm'
import YouTuber from './Youtuber'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Controlled</h1>
        <ControlledNameForm />
        <hr />

        <h1>Uncontrolled</h1>
        <UncontrolledNameForm />
        <hr />

        <h1>Ref Example</h1>
        <YouTuber />
        <hr />
      </div>
    );
  }
}

export default App;
