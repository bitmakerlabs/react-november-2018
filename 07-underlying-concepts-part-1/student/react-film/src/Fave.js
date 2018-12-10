import React, { Component } from 'react';

class Fave extends Component {

  state = {
    isFave: false
  }

  handleClick = (e) => {
    this.setState({ isFave: !this.state.isFave })
    e.stopPropagation()
  }

  render() {
    const isFave = this.state.isFave ? 'remove_from_queue' : 'add_to_queue'

    return (
      <div className={ `film-row-fave ${ isFave }` } onClick={ this.handleClick }>
        <p className="material-icons">{ isFave }</p>
      </div>
    );
  }
}

export default Fave;
