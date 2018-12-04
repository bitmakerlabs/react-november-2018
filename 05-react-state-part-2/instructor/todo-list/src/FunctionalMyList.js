import React from 'react'

import ListItem from './ListItem'

const FunctionalMyList = props => {

  let allItems = props.items.map( (item, index) =>
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

export default FunctionalMyList
