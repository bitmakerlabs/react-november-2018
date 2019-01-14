import React, { Component } from 'react'

import FruitList from './FruitList'
import FruitFilter from './FruitFilter'
import MatchingButton from './MatchingButton'
import UnmatchingButton from './UnmatchingButton'

class FruitContainer extends Component {

  state = {
    fruitsToDisplay: this.props.fruits,
    unmatchedFruits: [],
    filterValue: '',
  }

  // Do not modify this handleFilterChange method
  handleFilterChange = (event) => {
    event.preventDefault()
    const filterValue = event.target.value

    this.setState( (prevState, props) => {
      const filteredFruitList = props.fruits.filter( fruit =>
        fruit.toLocaleLowerCase().includes( filterValue.toLocaleLowerCase() )
      )

      const unmatchedFruits = props.fruits.filter( fruit =>
        !fruit.toLocaleLowerCase().includes( filterValue.toLocaleLowerCase() )
      )

      return {
        fruitsToDisplay: filteredFruitList,
        unmatchedFruits: unmatchedFruits,
        filterValue
      }
    })
  }

  render() {
    const fruitChoice = this.state.fruitsToDisplay
    const button = <MatchingButton onClick={ this.handleMatchingClick } />

    return (
      <div>
        <FruitFilter value={ this.state.filterValue } onChange={ this.handleFilterChange } />
        { button }
        <FruitList fruits={ fruitChoice } />
      </div>
    )
  }
}

export default FruitContainer
