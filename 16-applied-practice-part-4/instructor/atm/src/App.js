import React from 'react'
import logo from './assets/ga.png'
import './App.css'

import Account from './Account'

const App = () => (
  <div id="content">
    <div id="nav">
      <div id="logo">
        <img src={logo} alt="General Assembly Logo" />
      </div>
      <div id="title">
        Bank of GA
      </div>
    </div>

    <Account name="checking" />
  </div>
)

export default App
