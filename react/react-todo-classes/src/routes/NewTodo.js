import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ActionButton from "../components/buttons/ActionButton";
import StateContext from "../components/context/StateContext";
import { Container, RouteSection } from "../components/Layout";

const Form = styled.form`
  display: block;
`;
const LabelTitle = styled.label`
  display: block;
  color: var(--clr-secondary-text);
`;
const LabelDescription = styled.label`
  display: block;
  color: var(--clr-secondary-text);
`;
const Title = styled.input`
  width: 100%;
  display: block;

  color: var(--clr-tertiary);
  border-radius: var(--card-radius);
  background-color: var(--clr-secondary);
  border: solid 2px var(--clr-tertiary);
`;
const Description = styled.textarea`
  width: 100%;
  height: 15rem;
  display: block;

  color: var(--clr-tertiary);
  border-radius: var(--card-radius);
  background-color: var(--clr-secondary);
  border: solid 2px var(--clr-tertiary);
  /* border: none; */
  resize: none;
`;

const ActionWrapper = styled.div`
  width: 100%;
  display: block;
`;

export default class NewTodo extends React.Component {
  static contextType = StateContext;

  render() {
    const {
      handleSubmitTodo,
      setTodoTitle,
      setTodoDescription,
      todoTitle,
      todoDescription,
    } = this.context;
    console.log(todoTitle);
    console.log(todoDescription);

    return (
      <Container>
        <RouteSection>
          <header>
            <h2>New Task</h2>
          </header>

          <Form onSubmit={handleSubmitTodo}>
            <LabelTitle htmlFor="taskTitle">Title</LabelTitle>
            <Title
              id="taskTitle"
              type="text"
              placeholder="Enter a title..."
              required
              value={todoTitle}
              onChange={(e) => setTodoTitle(e)}
            />

            <LabelDescription htmlFor="taskDescription">
              Description
            </LabelDescription>
            <Description
              id="taskDescription"
              type="text-area"
              placeholder="Enter a description..."
              required
              value={todoDescription}
              onChange={(e) => setTodoDescription(e)}
            />

            <ActionButton name="Add" type="submit" />
          </Form>
        </RouteSection>
      </Container>
    );
  }
}
