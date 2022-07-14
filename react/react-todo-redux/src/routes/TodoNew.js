import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { GContainer, GMotionRoute } from "../components/AppLayout";
import StateContext from "../context/StateContext";
import { pageTransitionLeft } from "../utils/motionConfig";

const AddForm = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: var(--clr-secondary);
`;
const Label = styled.label``;
const TitleInput = styled.input``;
const DescInput = styled.input``;
const Submit = styled.button``;

const TodoNew = () => {
  const {
    title,
    description,
    onTitleChanged,
    onDescriptionChanged,
    onAddTodoClicked,
  } = useContext(StateContext);

  // console.log(title);
  // console.log(description);

  return (
    <GMotionRoute variants={pageTransitionLeft} initial="hidden" animate="show">
      <section id="todoNewRoute">
        <GContainer>
          <header>
            <h1>Add a New Todo</h1>
          </header>

          <AddForm>
            <Label htmlFor="todoTitle">Todo Title</Label>
            <TitleInput
              type="text"
              id="todoTitle"
              name="todoTitle"
              value={title}
              onChange={onTitleChanged}
            />

            <Label>Todo Description</Label>
            <DescInput
              type="textarea"
              id="todoDescription"
              name="todoDescription"
              value={description}
              onChange={onDescriptionChanged}
            />

            <Submit type="button" onClick={onAddTodoClicked}>
              Add Todo
            </Submit>
          </AddForm>
        </GContainer>
      </section>
    </GMotionRoute>
  );
};
export default TodoNew;
