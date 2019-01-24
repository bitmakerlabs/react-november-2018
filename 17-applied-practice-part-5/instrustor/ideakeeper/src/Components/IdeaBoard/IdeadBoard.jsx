import React from "react";
import { getIdeas } from "../../Service";
import "./IdeaBoard.css";
import Idea from "./Idea";

class IdeaBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    };
  }

  componentDidMount() {
    getIdeas("Elvis")
      .then(e => e.json())
      .then(e => {
        let array = Object.keys(e.ideas).map(element => {
          return {
            id: element,
            title: e.ideas[element].title,
            description: e.ideas[element].description
          };
        });

        this.setState({ ideas: array });
      });
  }

  render() {
    return (
      <div>
        {this.state.ideas.length > 0 ? (
          <Idea data={this.state.ideas} />
        ) : (
          <div className="loader" />
        )}
      </div>
    );
  }
}

export default IdeaBoard;
