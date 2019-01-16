import React, { Component } from 'react'

class ControlledNameForm extends Component {

  state = { value: '' }

  handleChange = event => {
    this.setState({ value: event.target.value.toUpperCase() })
  }

  render() {
    return (
      <div>
        <h2>{ this.state.value }</h2>
        <form>
          <input type="text" value={ this.state.value } onChange={ this.handleChange } />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ControlledNameForm
