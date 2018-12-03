import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <div>
        <h1>The Lord of The Rings :: {this.props.title}</h1>
        <h3>{this.props.hours}h {this.props.minutes}min</h3>
      </div>
    );
  }
}


export default Movie;