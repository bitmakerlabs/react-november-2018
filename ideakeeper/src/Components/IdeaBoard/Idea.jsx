import React from "react";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const IdeaNoteDiv = styled.div`
  background-color: #fff740;
  margin: 10px;
  padding: 10px;
`;

const Title = styled.input`
  background-color: #fff740;
  border: none;
  font-weight: bold;

  :focus {
    outline: none;
    font-weight: none;
  }
`;

const Description = styled.textarea`
  background-color: #fff740;
  border: none;
  height: 100px;
  padding: 0px;
  margin: 0px;

  :focus {
    outline: none;
  }
`;

const Close = styled.label`
  opacity: 0;
  color: red;
`;

const Span = styled.span`
  ${Close}:hover {
    opacity: 1;
  }
`;

const IdeaNote = (e, i, props) => {
  return (
    <IdeaNoteDiv key={i}>
      <p>
        <Title
          placeholder="Title"
          value={e.title}
          onChange={event => props.TitleChange(i, event.target.value)}
        />
        <Span>
          <Close onClick={e=>props.DeleteIdea(i)}>x</Close>
        </Span>
      </p>
      <Description
        placeholder="Description"
        value={e.description}
        onChange={event => props.DescriptionChange(i, event.target.value)}
      />
    </IdeaNoteDiv>
  );
};

const Idea = props => {
  return (
    <BackgroundDiv>
      {props.data ? props.data.map((e, i) => IdeaNote(e, i, props)) : null}
    </BackgroundDiv>
  );
};

export default Idea;
