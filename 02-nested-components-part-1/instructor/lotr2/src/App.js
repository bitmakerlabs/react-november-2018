import React from 'react';
import Movie from './Movie';
import './App.css';

class App extends React.Component {

  movies = [
    {
      title: "The Fellowship of the Ring",
      hours: 2,
      minutes: 58
    },
    {
      title: "The Two Towers",
      hours: 2,
      minutes: 59
    },
    {
      title: "The Return of the King",
      hours: 3,
      minutes: 21
    }
  ];
  
  
  render() {
    let movieList = null;
    movieList = this.movies.map((e,i)=><Movie key ={i} {...e}/>)
    return (
      <div className="App">
       {/* <Movie title={this.movies[0].title} hours={this.movies[0].hours} minutes={this.movies[0].minutes} />
       <Movie title={this.movies[1].title} hours={this.movies[1].hours} minutes={this.movies[1].minutes} />
       <Movie title={this.movies[2].title} hours={this.movies[2].hours} minutes={this.movies[2].minutes} /> */}
      {movieList}
      </div>
    );
  }
}

export default App;
