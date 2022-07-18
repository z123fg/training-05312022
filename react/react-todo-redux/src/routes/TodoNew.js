import { useContext } from "react";
import styled from "styled-components";
import { GContainer, GForm, GMotionRoute, GSectionHeader, GTextarea, GTextInput, SubmitButton } from "../components/AppLayout";
import BreadCrumb from "../components/buttons/BreadCrumb";
import StateContext from "../context/StateContext";
import { pageTransitionLeft } from "../utils/motionConfig";

const TodoNew = () => {
  const {
    title,
    description,
    onTitleChanged,
    onDescriptionChanged,
    handleAddedTodo,
  } = useContext(StateContext);

  // console.log(title);
  // console.log(description);

  return (
    <GMotionRoute variants={pageTransitionLeft} initial="hidden" animate="show">
      <section id="todoNewRoute">
        <GContainer>
          <BreadCrumb title="Go Back" /> 

          <GSectionHeader>
            <h1>Add a New Todo</h1>
          </GSectionHeader>

          <GForm>
            <label htmlFor="todoTitle">Title</label>
            <GTextInput
              type="text"
              id="todoTitle"
              name="todoTitle"
              placeholder="Type..."
              required
              value={title}
              onChange={onTitleChanged}
            />

            <label>Description</label>
            <GTextarea
              type="textarea"
              id="todoDescription"
              name="todoDescription"
              placeholder="Type..."
              value={description}
              onChange={onDescriptionChanged}
            />
          </GForm>

          <SubmitButton type="button" onClick={handleAddedTodo}>
            Add Todo
          </SubmitButton>
        </GContainer>
      </section>
    </GMotionRoute>
  );
};
export default TodoNew;
