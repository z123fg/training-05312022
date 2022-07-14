import styled from "styled-components";
import { Link } from "react-router-dom";
import Icons from "../assets/Icons"

const AddTodoLink = styled(Link)`
  display: flex;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border-radius: 5rem;
  background-color: var(--clr-primary);

  svg {
    fill: var(--clr-primary-accent);
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