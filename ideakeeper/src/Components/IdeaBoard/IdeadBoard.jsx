import React from "react";
import { getIdeas, updateIdea, DeleteIdea, CreateIdea } from "../../Service";
import "./IdeaBoard.css";
import Idea from "./Idea";
import styled from "styled-components";
import { connect } from "react-redux";
const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid dodgerblue;
  border-radius: 3px;
  display: block;

  :focus {
    outline: none;
  }
`;

class IdeaBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
      show: false
    };
  }

  componentDidMount() {
    getIdeas(this.props.name)
      .then(e => e.json())
      .then(e => {
        let array = Object.keys(e.ideas).map(element => {
          return {
            key: element,
            title: e.ideas[element].title,
            description: e.ideas[element].description
          };
        });

        this.setState({ ideas: array });
      });
  }

  componentDidUpdate() {
    setInterval(() => {
      if (this.state.show) {
        this.setState({ show: false });
      }
    }, 3000);
  }

  handleTitleChange = (index, data) => {
    let array = this.state.ideas.map((e, i) => {
      if (i === index) {
        e.title = data;
      }
      return e;
    });

    this.setState({ ideas: array }, () => {
      updateIdea(this.props.name, array[index])
        .then(e => e.json())
        .then(e => {
          this.setState({ show: true });
        });
    });
  };

  handleDescriptionChange = (index, data) => {
    let array = this.state.ideas.map((e, i) => {
      if (i === index) {
        e.description = data;
      }
      return e;
    });

    this.setState({ ideas: array }, () => {
      updateIdea(this.props.name, array[index])
        .then(e => e.json())
        .then(e => {
          this.setState({ show: true });
        });
    });
  };

  onDeleteIdea = async index => {
    let array = this.state.ideas.map(e => e);

    await DeleteIdea(this.props.name, array[index])
      .then(e => e.json())
      .then(e => {
        array.splice(index, 1);
        this.setState({ ideas: array });
      });
  };

  CreateIdeas = () => {
    let array = this.state.ideas.map(e => e);
    array.push({
      title: "",
      description: ""
    });

    this.setState({ ideas: array }, () => {
      CreateIdea(this.props.name)
        .then(e => e.text())
        .then(e => {
          getIdeas(this.props.name)
          .then(e => e.json())
          .then(e => {
            let array = Object.keys(e.ideas).map(element => {
              return {
                key: element,
                title: e.ideas[element].title,
                description: e.ideas[element].description
              };
            });
    
            this.setState({ ideas: array });
          })
        });
    })
  }


  render() {
    return (
      <div>
      {this.props.name? <h1>you have selected {this.props.name}</h1>:null}
        {this.state.show ? <h2>Changes Saved</h2> : null}
        <br />
        <Button onClick={e => this.CreateIdeas()}>Add Idea</Button>
        <br />
        {this.state.ideas.length > 0 ? (
          <Idea
            data={this.state.ideas}
            TitleChange={this.handleTitleChange}
            DescriptionChange={this.handleDescriptionChange}
            DeleteIdea={this.onDeleteIdea}
          />
        ) : (
          <div className="loader" />
        )}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    name: state.selectedUser
  };
};

export default connect(mapStateToProps,null)(IdeaBoard);
