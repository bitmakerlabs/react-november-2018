import React from "react";
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

const Background = styled.div`
  display: flex;
  margin-top: 10%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const UserSelection = props => {
  console.log(props);
  return (
    <Background>
      {props.user
        ? props.user.map((e, i) => <Button key={i} onClick={c=>{
          props.onUserSelected(e)
          props.history.push('/ideas')
          }}>{e}</Button>)
        : null}
    </Background>
  );
};

const mapStateToProps = state => {
  return {
    userState: state.selectedUser
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    onUserSelected: user => dispatch({type:"USER", payload:user})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserSelection);
