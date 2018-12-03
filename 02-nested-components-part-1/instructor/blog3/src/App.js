import React, { Component } from 'react';
import Author from './Author';
import './App.css';

class App extends Component {

  render() {
    let authors = null;
    if(this.props.authors.length > 0){
      authors = this.props.authors.map((e,i)=>{return <Author key={i} Author={e}/>})
    }
    return (
      <div className="App">
      <h1>{this.props.title}</h1>
       {authors}
       <p> Checkout this body::</p>
       Comments:
       <p>{this.props.comment[0]}</p>
      </div>
    );
  }
}

export default App;
