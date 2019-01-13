import React, { Component } from 'react';

class FormType extends Component {
  render() {
    console.log('Props contact', this.props);
    return (
      <div className="App">
        <h2> Form {this.props.match.params.formType} </h2>
      </div>
    );
  }
}

export default FormType;
