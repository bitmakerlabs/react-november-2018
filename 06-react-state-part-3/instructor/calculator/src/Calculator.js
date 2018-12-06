import React, { Component } from 'react'

class Calculator extends Component {

  state = {
    val1: 0,
    val2: 0,
    sum: 0
  }

  // Easy solution
  // handleKeyUp = (event) => {
  //   const val1 = document.getElementById("val1").value
  //   const val2 = document.getElementById("val2").value
  //   const sum = (parseInt(val1) || 0) + (parseInt(val2) || 0)
  //   this.setState({ sum })
  // }

  // More advanced solution
  handleKeyUp = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value) || 0
    }, () => {
      this.setState({
        sum: this.state.val1 + this.state.val2
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Calculate with React!</h1>

        <div className="add">
          <input type="text" name="val1" onKeyUp={ this.handleKeyUp } />
          <span>+</span>
          <input type="text" name="val2" onKeyUp={ this.handleKeyUp } />
          <span>=</span>
          <h3>{ this.state.sum }</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
