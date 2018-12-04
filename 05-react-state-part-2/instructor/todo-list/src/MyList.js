import React, { Component } from 'react'

import ListItem from './ListItem'

class MyList extends Component {

  state = {
    list: ['Buy Ice Cream', 'Eat Ice Cream', 'Go to the Gym'],
    newItem: ''
  }

  clearList = () => {
    this.setState({
      list: []
    })
  }

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()

    // This won't work as you cannot modify state directly
    //this.state.list.push(this.state.newItem)
    const newList = [...this.state.list]
    newList.push(this.state.newItem)

    this.setState({
      list: newList,
      newItem: ''
    })
  }

  handleLink = (e) => {
    const newList = [...this.state.list]
    newList.splice(e.target.id, 1)

    this.setState({
      list: newList
    })
  }

  render() {

    // let allItems = this.state.list.map( (item, index) =>
    //   <ListItem key={ index } item={ item } />
    // )

    let allItems = this.state.list.map( (item, index) => {
      return(
        <li key={index}>
          { item }
          &nbsp;
          <a id={ index } onClick={ this.handleLink }>X</a>
        </li>
      )
    })

    return (
      <div>
        <h1>Things I need to stop procrasting on:</h1>
        <ul>
          { allItems }
        </ul>

        <form>
          <input type="text"
            placeholder="Type an item here"
            value={ this.state.newItem }
            onChange={ this.handleChange }
          />
          <button onClick={ this.addItem } >Add it!</button>
        </form>

        <button onClick={ this.clearList }>Finished the List!</button>
      </div>
    );
  }
}

export default MyList
