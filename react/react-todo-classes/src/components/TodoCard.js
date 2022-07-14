import React from "react";
import Icons from "./icons/Icons";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StatusButton from "./buttons/StatusButton";
import { completeConfig, incompleteConfig } from "../utils/appConfig";
import StateContext, { BASE_URL } from "./context/StateContext";
import axios from "axios";

const TodoItemContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--card-radius);
  background-color: var(--clr-secondary);
`;

const EditTodoLink = styled(motion(Link))`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default class TodoCard extends React.Component {
  static contextType = StateContext;

  // handleTodoStatus = async (todo) => {
  //   const { todos } = this.context;
  //   // const targetID = todo.id;
  //   const updatedStatus = {
  //     isComplete: !todo.isComplete,
  //   };

  //   console.log(todo);
  //   try {
  //     const response = await axios.patch(
  //       `${BASE_URL}/${todo.id}`,
  //       updatedStatus
  //     );
  //     this.setState({
  //       todos: todos.map((item) =>
  //         item.id === todo.id ? { ...response.data } : item
  //       ),
  //     });
  //     this.setTodoCounts(response.data)
  //   } catch {
  //     this.setState({
  //       errorMessage: "Error in Updating Status!",
  //     });
  //   }
  // };

  // componentDidUpdate = () => {
  //   const { todos } = this.context;

  // }

  handleTodoStatus = async (todo) => {
    const { todos } = this.context;
    console.log(todos);
    console.log(todo)
    // console.log(todo.isComplete);
    // console.log(todo.id);

    const updatedStatus = {
      isComplete: !todo.isComplete,
    }
    console.log(updatedStatus);

    try {
      const res = await axios.patch(`${BASE_URL}/${todo.id}`, updatedStatus);
      this.setState({
        todos: todos.map((item) => item.id === todo.id ? { ...res.data } : item)
      })
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const todo = this.props.todo;
    const isComplete = todo.isComplete;

    const complete = completeConfig; // styles
    const incomplete = incompleteConfig; // styles

    return (
      <TodoItemContainer>
        <StatusButton
          isComplete={isComplete}
          onClick={() => this.handleTodoStatus(todo)}
        />

        <EditTodoLink
          to={`todos/:${todo.id}`}
          style={
            isComplete ? { color: complete.color } : { color: incomplete.color }
          }
        >
          <h3>
            {todo.title.length <= 30
              ? todo.title
              : `${todo.title.slice(0, 30)}...`}
          </h3>

          <Icons name="Link" />
        </EditTodoLink>
      </TodoItemContainer>
    );
  }
}
