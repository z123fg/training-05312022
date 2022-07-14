import React from "react";
import styled from "styled-components";
import StateContext from "./context/StateContext";
import { LoadingMessage, NoDataMessage, SectionContainer } from "./Layout";
import TodoCard from "./TodoCard";

const CardsContainer = styled.div``;

export default class TodoCards extends React.Component {
  static contextType = StateContext;

  render() {
    const { todos, isLoading } = this.context;

    return (
      <SectionContainer>
        <h2>All Tasks</h2>

        <CardsContainer>
          {isLoading && (
            <LoadingMessage>
              <h2>Loading Todos...</h2>
            </LoadingMessage>
          )}
          {!isLoading && todos.length === 0 ? (
            <NoDataMessage>
              <h2>No Tasks To Display.</h2>
            </NoDataMessage>
          ) : (
            <>
              {todos.map((todo) => (
                <TodoCard key={todo.id} todo={todo} />
              ))}
            </>
          )}
        </CardsContainer>
      </SectionContainer>
    );
  }
}
