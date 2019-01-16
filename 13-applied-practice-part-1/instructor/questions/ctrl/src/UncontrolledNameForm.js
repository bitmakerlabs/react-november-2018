import React, { Component } from 'react'

class UncontrolledNameForm extends Component {

  handleSubmit = event => {
    event.preventDefault()
    const name = event.target.elements["uncontrolled_name"].value
    document.getElementById("name_h2").innerHTML = name
  }

  render() {
    return (
      <div>
        <h2 id="name_h2"></h2>
        <form onSubmit={ this.handleSubmit }>
          <input name="uncontrolled_name" type="text" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default UncontrolledNameForm
