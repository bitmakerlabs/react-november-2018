import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {

  state = {
    body: 'Initial body'
  }

  changeBody = () => {
    let newBody = prompt('What should the new body be?')

    this.setState({
      body: newBody
    })
  }

  render() {

    let allComments = this.props.post.comments.map((comment, index) =>
      <Comment body={ comment } key={ index } />
    )

    let allAuthors = this.props.authors.map((name, index) =>
      <Author name={ name } key={ index } />
    )

    return (
      <div className="post">
        <h1>{ this.props.post.title }</h1>

        { allAuthors }

        <p>{ this.state.body }</p>

        <button onClick={ this.changeBody }>Edit body</button>

        <h3>Comments</h3>
        { allComments }
      </div>
    );
  }
}

export default Post;
