import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Icons from "../../components/assets/Icons";
import StateContext from "../../context/StateContext";
import { completeConfig, incompleteConfig } from "../../utils/appConfig";

const StyledTodo = styled.article`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  /* display: block; */
  border-radius: var(--card-radius);
  padding: calc(var(--grid-gutter) / 4);
  background-color: var(--clr-secondary);
  margin-bottom: calc(var(--grid-gutter) / 4);
  div {
    display: flex;
    flex-direction: column;
    width: min(75%, 100%);
  }
`;

const Status = styled.button`
  color: var(--clr-primary-text);
  margin-right: calc(var(--grid-gutter) / 4);
  height: calc(var(--grid-gutter) / 3);
  width: calc(var(--grid-gutter) / 3);

  @media (min-width: 40rem) {
    height: calc(var(--grid-gutter) / 2.5);
    width: calc(var(--grid-gutter) / 2.5);
  }
  @media (min-width: 60rem) {
    height: calc(var(--grid-gutter) / 2);
    width: calc(var(--grid-gutter) / 2);
  }
`;
const Title = styled.h3`
  margin-bottom: 0.5rem;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Description = styled.p`

  color: var(--clr-tertiary);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TodoCard = ({ todo }) => {
  const { onChangedStatusClicked, completed } = useContext(StateContext);
  const complete = completeConfig; // styles
  const incomplete = incompleteConfig; // styles

  // don't use id on onChangedStatusClicked => will be endless loop
  return (
    <>
      <StyledTodo>
        <Status onClick={onChangedStatusClicked}>
          <span
            style={{
              color: completed ? complete.color : incomplete.color,
            }}
          >
            <Icons name={completed ? complete.name : incomplete.name} />
          </span>
        </Status>

        <div>
          <Title
            style={{
              color: completed ? complete.color : incomplete.color,
            }}
          >
            {todo.title}
          </Title>

          <Description>{todo.description}</Description>
        </div>
      </StyledTodo>
    </>
  );
};
export default TodoCard;
