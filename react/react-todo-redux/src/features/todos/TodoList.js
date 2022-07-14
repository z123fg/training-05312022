import React from "react";
import styled from "styled-components";
import TodoCard from "./TodoCard";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const StyledTodoList = styled.section`
  margin-top: calc(var(--grid-gutter) / 2);
`;

const ServerMsg = styled.p`
  display: block;
  padding: calc(var(--grid-gutter) / 4);
  background-color: var(--clr-secondary);
  border-radius: var(--card-radius);
  color: var(--clr-tertiary);
`;

const TodoList = () => {
  const { data, status, error } = useContext(StateContext);

  return (
    <StyledTodoList>
      {status === "loading" && <ServerMsg>Loading...</ServerMsg>}

      {status === "succeeded" && (
        <>
          {data.length === 0 ? (
            <ServerMsg>No Tasks To Display</ServerMsg>
          ) : (
            data.map((todo) => <TodoCard key={todo.id} todo={todo} />)
          )}
        </>
      )}

      {status === "failed" && <ServerMsg>{error}</ServerMsg>}
    </StyledTodoList>
  );
};
export default TodoList;