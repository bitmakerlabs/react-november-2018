import React from "react";

// class Author extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={}
//     }

//     render(){
//         return(
//             <React.Fragment>
//             <h3>Written by: {this.props.Author}</h3>
//             </React.Fragment>
//         );
//     }
// }

const Author = props => {
  return (
    <React.Fragment>
      <h3>Written by: {props.Author}</h3>
    </React.Fragment>
  );
};

export default Author;
