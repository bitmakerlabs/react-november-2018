import React, { Component } from 'react'

import ListItem from './ListItem'

class MyList extends Component {
  render() {

    let allItems = this.props.items.map( (item, index) =>
      <ListItem keys={ index } item={ item } />
    )

    return (
      <div>
        <h1>Things I need to stop procrasting on:</h1>
        <ul>
          { allItems }
        </ul>
      </div>
    );
  }
}

export default MyList
