import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icons from "../icons/Icons";

const AddTodoLink = styled(Link)`
  position: fixed;

  /* will be changed based on container size */
  bottom: 2.5vh;
  right: 5vw;
`;
const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  
  background-color: var(--clr-primary-accent);
  border-radius: 5rem;
  svg {
    height: calc(var(--grid-gutter) / 2.25);
    width: calc(var(--grid-gutter) / 2.25);
    color: var(--clr-primary);
  }
`;

const AddButton = () => {
  return (
    <AddTodoLink to="todos">
      <Inner>
        <Icons name="Add" />
      </Inner>
    </AddTodoLink>
  );
};
export default AddButton;
