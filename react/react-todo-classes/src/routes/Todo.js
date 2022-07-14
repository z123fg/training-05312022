import React from "react";
import { Container } from "../components/Layout";
import ActionButton from "../components/buttons/ActionButton";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StateContext from "../components/context/StateContext";

const Inner = styled.div``

export default class Todo extends React.Component {
  static contextType = StateContext

  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
  }

  componentDidMount = () => {
    this.scrollToTop();
    this.findPost();
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  findPost = () => {
    // Alternative Method: Can't use react-router hooks within a class component
    const { todos } = this.context
    const param = window.location.pathname;
    const tId = param.slice(8);
    this.setState({
      todo: todos.find((todo) => todo.id.toString() === tId),
    });
  };

  render() {
    const todo = this.state.todo;
    const { handleDeleteTodo } = this.context;
    // console.log(todo);


    return (
      <Container>
        <Inner>
          {todo && (
            <>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <ActionButton name="Delete" onClick={() => handleDeleteTodo(todo.id)} />
              <ActionButton name="Edit" />
            </>
          )}
          {!todo && (
            <>
              <h2>No Task Found</h2>
              <p>Sorry, were having trouble finding this task.</p>
              <Link to="/">Go Home</Link>
            </>
          )}
        </Inner>
      </Container>
    );
  }
}