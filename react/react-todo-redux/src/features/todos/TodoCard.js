import { useContext } from "react";
import { Link } from "react-router-dom";
import StateContext from "../../context/StateContext";
import Icons from "../../components/assets/Icons";
import styled from "styled-components";

const CardWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(var(--grid-gutter) * 1.5);
  padding-right: calc(var(--grid-gutter) / 4);
  padding-left: calc(var(--grid-gutter) / 4);
  margin-top: calc(var(--grid-gutter) / 4);

  background-color: var(--clr-secondary);
  border-radius: calc(var(--card-radius) / 2);
`;

const Status = styled.div`
  width: 10%;
  display: flex;
  position: relative;
  align-items: center;

  color: ${({ colorcompleted }) =>
    colorcompleted === true
      ? `var(--clr-primary-accent)`
      : `var(--clr-secondary-accent)`};

  svg {
    height: calc(var(--grid-gutter) / 2.5);
    width: calc(var(--grid-gutter) / 2.5);
    position: absolute;
    z-index: 1;

    @media (min-width: 60rem) {
      height: calc(var(--grid-gutter) / 2);
      width: calc(var(--grid-gutter) / 2);
    }
  }
`;
const StatusCheckbox = styled.input`
  height: calc(var(--grid-gutter) / 2.5);
  width: calc(var(--grid-gutter) / 2.5);
  cursor: pointer;
  z-index: 2;
  opacity: 0;

  @media (min-width: 60rem) {
    height: calc(var(--grid-gutter) / 2);
    width: calc(var(--grid-gutter) / 2);
  }
`;
const Content = styled.div`
  width: 70%;
  justify-self: flex-start;
  margin-left: calc(var(--grid-gutter) / 4);

  color: ${({ colorcompleted }) =>
    colorcompleted === true
      ? `var(--clr-primary-accent)`
      : `var(--clr-secondary-accent)`};
`;
const Title = styled.h3`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Description = styled.p`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: calc(var(--grid-gutter) / 6);

  color: var(--clr-tertiary);
`;

const LinkWrapper = styled.div`
  width: 20%;

  a {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }
  svg {
    height: calc(var(--grid-gutter) / 2.5);
    width: calc(var(--grid-gutter) / 2.5);
    path {
      fill: ${({ colorcompleted }) =>
        colorcompleted === true
          ? `var(--clr-primary-accent)`
          : `var(--clr-secondary-accent)`};
    }

    @media (min-width: 60rem) {
      height: calc(var(--grid-gutter) / 2);
      width: calc(var(--grid-gutter) / 2);
    }
  }
`;

const TodoCard = ({ todo }) => {
  const { handleTodoStatus } = useContext(StateContext);

  return (
    <CardWrapper>
      <Status colorcompleted={todo.completed}>
        <StatusCheckbox
          type="checkbox"
          id={todo.id}
          value={todo.completed}
          checked={todo.completed ? true : false}
          onChange={handleTodoStatus}
        />

        <Icons name={todo.completed ? `Completed` : `Incomplete`} />
      </Status>

      <Content colorcompleted={todo.completed}>
        <Title>{todo.title}</Title>

        {todo.description && <Description>{todo.description}</Description>}
      </Content>

      <LinkWrapper colorcompleted={todo.completed}>
        <Link to={`todo/${todo.id}`}>
          <Icons name="Link" />
        </Link>
      </LinkWrapper>
    </CardWrapper>
  );
};
export default TodoCard;