import React, { Component } from "react";
import Article from "./article";
import Nav from "./NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div style={{"margin-top": "50px"}}>
          <Nav />
        </div>

        <div style={{ margin: "auto", top: "20%", width: "50%" }}>
          {this.props.newsFeedData.map((e , i) => (
            <Article key={i} {...e} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
