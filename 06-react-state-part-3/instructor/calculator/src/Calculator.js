import React, { Component } from 'react'

class Calculator extends Component {

  state = {
    val1: 0,
    val2: 0,
    result: 0,
    operation: '+'
  }

  // Easy solution
  // handleKeyUp = (event) => {
  //   const val1 = document.getElementById("val1").value
  //   const val2 = document.getElementById("val2").value
  //   const sum = (parseInt(val1) || 0) + (parseInt(val2) || 0)
  //   this.setState({ sum })
  // }

  calculate = () => {
    const val1 = this.state.val1
    const val2 = this.state.val2
    let result = 0

    switch(this.state.operation) {
      case '+': {
        result = val1 + val2
        break
      }
      case '-': {
        result = val1 - val2
        break
      }
      case '*': {
        result = val1 * val2
        break
      }
      case '/': {
        result = val1 / val2
        break
      }
      default: {
        console.log("ERROR! Invalid Operation")
        break
      }
    }

    this.setState({ result })
  }

  handleChangeVal = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value) || 0
    }, this.calculate)
  }

  handleChangeOp = (event) => {
    const operation = event.target.value
    this.setState({ operation }, this.calculate)
  }

  render() {
    return (
      <div className="container">
        <h1>Calculate with React!</h1>

        <div className="add">
          <input type="text" name="val1" onKeyUp={ this.handleChangeVal } />

          <select onChange={ this.handleChangeOp } >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>

          <input type="text" name="val2" onKeyUp={ this.handleChangeVal } />
          <span>=</span>
          <h3>{ this.state.result }</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
