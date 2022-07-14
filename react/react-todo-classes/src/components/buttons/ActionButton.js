import React from "react";
import styled from "styled-components";
import Icons from "../icons/Icons";

const EditButton = styled.button`
  display: inline-flex;
  padding-top: 0.5rem;
  padding-right: 3rem;
  padding-bottom: 0.5rem;
  padding-left: 3rem;
  svg {
    height: 2rem;
    width: 2rem;
  }

  color: var(--clr-primary);
  border-radius: var(--card-radius);
  background-color: var(--clr-secondary-accent);
  border: solid 2px var(--clr-secondary-accent);
  
`;
const AddButton = styled.button`
  display: inline-flex;
  padding-top: 0.5rem;
  padding-right: 3rem;
  padding-bottom: 0.5rem;
  padding-left: 3rem;
  svg {
    height: 2rem;
    width: 2rem;
  }

  color: var(--clr-primary);
  border-radius: var(--card-radius);
  background-color: var(--clr-primary-accent);
  border: solid 2px var(--clr-primary-accent);
  
`;
const DeleteButton = styled.button`
  display: inline-flex;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  svg {
    height: 2rem;
    width: 2rem;
  }

  color: var(--clr-primary);
  border-radius: var(--card-radius);
  background-color: var(--clr-tertiary-accent);
  border: solid 2px var(--clr-tertiary-accent);
  
`;

const ActionButton = ({ name, onClick }) => {
  switch (name) {
    case "Edit":
      return (
        <EditButton onClick={onClick}>
          <Icons name="Edit" />
        </EditButton>
      );
    case "Add":
      return (
        <AddButton onClick={onClick}>
          <Icons name="Add" />
        </AddButton>
      );
    case "Delete":
      return (
        <DeleteButton onClick={onClick}>
          <Icons name="Delete" />
        </DeleteButton>
      );
    default:
      return (
        <AddButton>
          <Icons name="Add" />
        </AddButton>
      );
  }
};
export default ActionButton;
