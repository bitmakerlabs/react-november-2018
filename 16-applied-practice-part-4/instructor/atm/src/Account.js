import React, { Component } from 'react'

class Account extends Component {

  state = {
    balance: 0
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
        <input type="number" placeholder="Enter an amount" />
        <input type="button" value="Deposit" />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account
