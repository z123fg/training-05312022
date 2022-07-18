import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  GContainer,
  GForm,
  GMotionRoute,
  GSectionHeader,
  GServerMsg,
  GTextarea,
  GTextInput,
  SubmitButton,
} from "../components/AppLayout";
import BreadCrumb from "../components/buttons/BreadCrumb";
import StateContext from "../context/StateContext";
import { pageTransitionLeft } from "../utils/motionConfig";

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--clr-secondary);
`;
const Label = styled.label``;
const TitleInput = styled.input``;
const DescInput = styled.input``;
const Submit = styled.button``;

const TodoEdit = () => {
  const {
    data,
    editTitle,
    setEditTitle,
    editDescription,
    setEditDescription,
    onEditTitleChanged,
    onEditDescriptionChanged,
    handleEditTodo,
  } = useContext(StateContext);

  const { todoId } = useParams();

  const todo = data.find((todo) => todo.id.toString() === todoId);

  useEffect(() => {
    setEditTitle(todo?.title);
    setEditDescription(todo?.description);
  }, []);

  // console.log(editTitle);
  // console.log(editDescription);

  return (
    <GMotionRoute variants={pageTransitionLeft} initial="hidden" animate="show">
      <section id="todoEditRoute">
        <GContainer>
          <BreadCrumb title="Cancel Edit" />

          <GSectionHeader>
            <h1>Edit Todo</h1>
          </GSectionHeader>

          {todo == undefined && (
            <>
              <GServerMsg>No Task to Display</GServerMsg>
            </>
          )}

          {todo && (
            <GForm>
              <label htmlFor="editTodoTitle">Title</label>
              <GTextInput
                type="text"
                id="editTodoTitle"
                name="editTodoTitle"
                value={editTitle}
                onChange={onEditTitleChanged}
              />

              <label htmlFor="editTodoDescription">Description</label>
              <GTextarea
                type="textarea"
                id="editTodoDescription"
                name="editTodoDescription"
                value={editDescription}
                onChange={onEditDescriptionChanged}
              />

              <SubmitButton
                type="submit"
                id={todo.id}
                completed={todo.completed}
                onClick={handleEditTodo}
              >
                Confirm
              </SubmitButton>
            </GForm>
          )}
        </GContainer>
      </section>
    </GMotionRoute>
  );
};
export default TodoEdit;
