import React, { Component } from 'react'

class Calculator extends Component {

  render() {
    return (
      <div className="container">
        <h1>Calculate with React!</h1>

        <div className="add">
          <input type="text" />
          <span>+</span>
          <input type="text" />
          <span>=</span>
          <h3></h3>
        </div>
      </div>
    )
  }
}

export default Calculator
