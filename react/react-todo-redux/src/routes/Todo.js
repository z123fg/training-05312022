import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import StateContext from "../context/StateContext";
import {
  GBreadCrumb,
  GContainer,
  GMotionRoute,
  GServerMsg,
} from "../components/AppLayout";
import { pageTransitionLeft } from "../utils/motionConfig";
import styled from "styled-components";
import Icons from "../components/assets/Icons";
import BreadCrumb from "../components/buttons/BreadCrumb";

const StatusCard = styled.div`
  display: flex;
  padding: calc(var(--grid-gutter) / 4);
  margin-top: calc(var(--grid-gutter) / 2);

  border-radius: calc(var(--card-radius) / 2);
  background-color: var(--clr-secondary);
`;
const Status = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  color: ${({ colorcompleted }) =>
    colorcompleted === "true"
      ? `var(--clr-primary-accent)`
      : `var(--clr-secondary-accent)`};

  svg {
    z-index: 1;
    position: absolute;

    @media (min-width: 40rem) {
    }
    @media (min-width: 60rem) {
    }
  }
`;
const StatusCheckbox = styled.input`
  color: var(--clr-primary-text);
  cursor: pointer;
  z-index: 2;
  opacity: 0;

  @media (min-width: 40rem) {
  }
  @media (min-width: 60rem) {
  }
`;
const StatusMsg = styled.h2`
  margin-left: calc(var(--grid-gutter) / 4);
  
  color: ${({ colorcompleted }) =>
    colorcompleted === "true"
      ? "var(--clr-primary-accent)"
      : "var(--clr-secondary-accent)"};
`;

//

const TodoDisplay = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: calc(var(--grid-gutter) / 4);
`;
const Title = styled.h2`
  padding: calc(var(--grid-gutter) / 4);
  background-color: var(--clr-secondary);
  border-radius: calc(var(--card-radius) / 2);

  color: ${({ colorcompleted }) =>
    colorcompleted === "true"
      ? "var(--clr-primary-accent)"
      : "var(--clr-secondary-accent)"};
`;
const Description = styled.p`
  word-wrap: break-word;
  min-height: calc(var(--grid-gutter) * 4);
  margin-top: calc(var(--grid-gutter) / 4);
  padding: calc(var(--grid-gutter) / 4);

  border-radius: calc(var(--card-radius) / 2);
  background-color: var(--clr-secondary);
  color: var(--clr-tertiary);
`;

//

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: calc(var(--grid-gutter) / 4);
  margin-top: calc(var(--grid-gutter) / 4);
`;
const DeleteButton = styled.button`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: calc(var(--grid-gutter) / 4);
  padding-bottom: calc(var(--grid-gutter) / 4);

  border-radius: calc(var(--card-radius) / 2);
  color: var(--clr-tertiary-accent);
  border: var(--border);
`;
const EditLink = styled(Link)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: calc(var(--grid-gutter) / 4);
  padding-bottom: calc(var(--grid-gutter) / 4);
  
  border-radius: calc(var(--card-radius) / 2);
  color: var(--clr-tertiary);
  border: var(--border);
`;

const Todo = () => {
  const { handleTodoDelete, data, handleTodoStatus } = useContext(StateContext);
  const { todoId } = useParams();
  const todo = data.find((todo) => todo.id.toString() === todoId);
  // console.log(todo);

  return (
    <GMotionRoute variants={pageTransitionLeft} initial="hidden" animate="show">
      <section id="dashboardRoute">
        <GContainer>
          {!todo ? (
            <GServerMsg>Todo not found...</GServerMsg>
          ) : (
            <>
              <BreadCrumb title="Go Back" />
              <StatusCard>
                <Status colorcompleted={todo.completed.toString()}>
                  <StatusCheckbox
                    type="checkbox"
                    id={todo.id}
                    value={todo.completed}
                    onChange={handleTodoStatus}
                    checked={todo.completed ? true : false}
                  />

                  <Icons name={todo.completed ? `Completed` : `Incomplete`} />
                </Status>

                <StatusMsg colorcompleted={todo.completed.toString()}>
                  {todo.completed ? `Complete` : `Incomplete`}
                </StatusMsg>
              </StatusCard>

              <TodoDisplay>
                <Title colorcompleted={todo.completed.toString()}>
                  {todo.title}
                </Title>

                <Description>{todo.description}</Description>
              </TodoDisplay>

              <ButtonGroup>
                <EditLink to={`/edit/${todo.id}`}>Edit</EditLink>

                <DeleteButton id={todo.id} onClick={handleTodoDelete}>
                  Delete
                </DeleteButton>
              </ButtonGroup>
            </>
          )}
        </GContainer>
      </section>
    </GMotionRoute>
  );
};
export default Todo;
