import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllTodos,
  getTodosError,
  getTodosStatus,
  addNewTodo,
  updateTodoStatus,
} from "../features/todos/todosSlice";

const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  // selectors
  const todos = useSelector(getAllTodos);
  const status = useSelector(getTodosStatus);
  const error = useSelector(getTodosError);
  // const todo = useSelector((state) => selectPostById(state, Number(todoId)))

  // state
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [requestStatus, setRequestStatus] = useState("idle");

  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setData(todos);

    console.log(data);
    console.log(status);
    console.log(error);
  }, [todos]);

  // events
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  // const onStatusChanged = (e) => setCompleted(e.target.value);

  // find ID
  // export const selectTodoById = (state, todoId) => state.todos.todos.find(todo => todo.id === todoId);
  // const selectTodoById = (itemId) => {
  //   data.find(item => item.id === itemId)
  // }

  // onSubmit
  const onAddTodoClicked = () => {
    try {
      setRequestStatus("pending");
      dispatch(
        addNewTodo({ title, description: description, completed })
      ).unwrap();

      setTitle("");
      setDescription("");
      navigate("/");
    } catch (err) {
      console.error("Failed to Save Todo", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  const onChangedStatusClicked = (id) => {
    // const todoId = Number(e.target.id);
    const todoId = Number(id);
    // console.log(todoId);
    try {
      setRequestStatus("pending");
      dispatch(updateTodoStatus({ id: todoId, completed: !completed })).unwrap();

      setCompleted(!completed);
    } catch (err) {
      console.error("Could not update Todo Status", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  return (
    <StateContext.Provider
      value={{
        // selectors
        todos,
        status,
        error,
        // state
        data,
        setData,
        title,
        setTitle,
        description,
        setDescription,
        completed,
        setCompleted,
        requestStatus,
        setRequestStatus,
        // events
        onTitleChanged,
        onDescriptionChanged,
        onAddTodoClicked,
        // onStatusChanged,
        onChangedStatusClicked,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export default StateContext;
