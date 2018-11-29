import React, { Component } from 'react'

class MoodTracker extends Component {

  // Pre React v16 syntax
  // --------------------
  // constructor() {
  //   super()
  //
  //   this.state = {
  //     moodPoints: 5
  //   }
  // }

  state = {
    moodPoints: 7
  }

  increaseMood = () => {
    // let newMoodPoints
    //
    // if (this.state.moodPoints >= 10) {
    //   newMoodPoints = 1
    // }
    // else {
    //   newMoodPoints = this.state.moodPoints + 1
    // }

    let newMoodPoints = this.state.moodPoints >= 10 ? 1 : this.state.moodPoints + 1

    this.setState({
      moodPoints: newMoodPoints
    })
  }

  render() {
    return(
      <div>
        <p>On a scale of 1-10</p>
        <p>You are this happy: { this.state.moodPoints }</p>

        <button onClick={ this.increaseMood } >Cheer up!</button>
      </div>
    )
  }
}

export default MoodTracker
