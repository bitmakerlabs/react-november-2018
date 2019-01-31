import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getUser } from "./Service";
import IdeaBoard from "./Components/IdeaBoard/IdeadBoard";
import UserSelection from "./Components/UserSelection/UserSelection";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    getUser()
      .then(e => e.json())
      .then(e => {
        console.log(e)
        this.setState({ user: Object.keys(e) })});
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/users"
              exact
              render={routerProps => (
                <UserSelection user={this.state.user} {...routerProps} />
              )}
            />
            <Route path="/ideas" exact component={IdeaBoard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
