import React, { Component } from 'react'

import ListItem from './ListItem'

class MyList extends Component {

  state = {
    list: ['Buy Ice Cream', 'Eat Ice Cream', 'Go to the Gym']
  }

  clearList = () => {
    this.setState({
      list: []
    })
  }

  render() {

    let allItems = this.state.list.map( (item, index) =>
      <ListItem key={ index } item={ item } />
    )

    return (
      <div>
        <h1>Things I need to stop procrasting on:</h1>
        <ul>
          { allItems }
        </ul>

        <button onClick={ this.clearList }>Finished the List!</button>
      </div>
    );
  }
}

export default MyList
