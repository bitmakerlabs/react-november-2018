import React, { Component } from "react";
import dotenv from "dotenv";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";

dotenv.config();

class App extends Component {
  state = {
    films: TMDB.films,
    faves: [],
    current: {}
  };

  handleFaveToggle = film => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if (filmIndex > -1) {
      faves.splice(filmIndex, 1);
    } else {
      faves.push(film);
    }
    this.setState({ faves });
  };

  handleDetailsClick = film => {
    fetch(
      `https://api.themoviedb.org/3/movie/${film.id}?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }&append_to_response=videos,images&language=en`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ current: data });
      });
  };

  render() {
    const { films, faves, current } = this.state;
    return (
      <div className="film-library">
        <FilmListing
          films={films}
          faves={faves}
          onFaveToggle={this.handleFaveToggle}
          onDetailsClick={this.handleDetailsClick}
        />
        <FilmDetails film={current} />
      </div>
    );
  }
}

export default App;
