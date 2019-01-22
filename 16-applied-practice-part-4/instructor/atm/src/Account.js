import React, { Component } from 'react'

class Account extends Component {

  state = {
    balance: 0,
    value: ''
  }

  handleOnChange = (e) => {
    const value = e.target.value
    this.setState({value})
  }

  handleDepositClick = (e) => {
    let value = parseInt(this.state.value) || 0
    value = value > 0 ? value : 0

    this.setState({
      balance: this.state.balance + value,
      value: ''
    })
  }

  render() {
    let balanceClass = "balance"

    if (this.state.balance === 0) {
      balanceClass += " zero"
    }

    return (
      <div className="account">
        <h2>
          {this.props.name}
        </h2>
        <div className={balanceClass}>
          {this.state.balance}
        </div>
        <input type="number" placeholder="Enter an amount" value={ this.state.value } onChange={ this.handleOnChange } />
        <input type="button" value="Deposit" onClick={ this.handleDepositClick } />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account
