import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'

import TMDB from './TMDB'

class App extends Component {

  state = {
    films: TMDB.films,
    faves: [],
    current: {}
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if ( filmIndex > -1 ) {
      console.log("Removing " + film.title + " from faves")
      faves.splice(filmIndex, 1)
    } else {
      console.log("Adding " + film.title + " to faves")
      faves.push(film)
    }

    this.setState({faves});
  }

  handleDetailsClick = (film) => {
    console.log("Fetching details for " + film.title)
    this.setState({current: film})
  }

  render() {

    return (
      <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onDetailsClick={this.handleDetailsClick} />
        <FilmDetails film={this.state.current} />
      </div>
    );
  }
}

export default App;
