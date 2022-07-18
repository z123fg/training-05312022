import styled from "styled-components";
import { Link } from "react-router-dom";
import Icons from "../assets/Icons"

const AddTodoLink = styled(Link)`
  display: flex;
  position: fixed;
  border-radius: 5rem;
  background-color: var(--clr-secondary);

  right: calc(var(--grid-gutter) / 4);
  bottom: 2rem;
  @media (min-width: 40rem) {
    right: calc(var(--grid-gutter) / 2);
  }
  @media (min-width: 60rem) {
    right: var(--grid-gutter);

  }

  svg {
    fill: var(--clr-tertiary);
    height: 3rem;
    width: 3rem;
  }
`

const AddTodo = () => {
  return(
    <AddTodoLink to="/todo">
      <Icons name="Add" />
    </AddTodoLink>
  )
}
export default AddTodo;