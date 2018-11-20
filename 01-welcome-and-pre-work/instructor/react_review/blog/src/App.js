import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {

    let allComments = this.props.post.comments.map( (comment, index) => {
      return (
        <li key={ index }>{ comment }</li>
      )
    })

    return (
      <div className="App">
        <p>Owner: { this.props.owner }</p>

        <h1>{ this.props.post.title }</h1>
        <h2>{ this.props.post.author }</h2>
        <p>{ this.props.post.body }</p>

        <h3>Comments:</h3>
        <p>{ allComments }</p>
      </div>
    );
  }
}

export default Post;
