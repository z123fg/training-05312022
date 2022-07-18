import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MonthDayLookup,
  MonthLookup,
  WeekdayLookup,
} from "../utils/dateConfig";
import {
  getAllTodos,
  getTodosError,
  getTodosStatus,
  addNewTodo,
  editTodo,
  updateTodoStatus,
  deleteTodo,
} from "../features/todos/todosSlice";

const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  // selectors
  const todos = useSelector(getAllTodos);
  const status = useSelector(getTodosStatus);
  const error = useSelector(getTodosError);

  // context state
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [description, setDescription] = useState("");
  const [requestStatus, setRequestStatus] = useState("idle");
  const [completeCount, setCompleteCount] = useState(0);
  const [incompleteCount, setIncompleteCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [date, setDate] = useState("");
  const [actionsOpen, setActionsOpen] = useState(false);

  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setData(todos);
    // console.table(data);
    // console.table(todos);
    // console.log(status);
    // console.log(error);
  }, [todos]);

  useEffect(() => {
    setTodoCounts(data);
    // console.log(totalCount);
    // console.log(completeCount);
    // console.log(incompleteCount);
  }, [data, completeCount, incompleteCount, totalCount]);

  useEffect(() => {
    setFilteredData(data);
    // console.table(filteredData)
  }, [data]);

  useEffect(() => {
    setDate(setTodaysDate());
    // console.log(date);
  }, [date]);

  // global functions
  const setTodoCounts = (responseData) => {
    const iCR = responseData.filter((todo) => todo.completed === false);
    const cCR = responseData.filter((todo) => todo.completed === true);
    setTotalCount(responseData.length);
    setIncompleteCount(iCR.length);
    setCompleteCount(cCR.length);
  };

  const resetFilteredData = () => {
    setFilteredData(data);
    setActionsOpen(false);
  };
  const filterComplete = () => {
    const inCompFilter = data.filter((todo) => todo.completed === true);
    setFilteredData(inCompFilter);
    setActionsOpen(false);
  };
  const filterIncomplete = () => {
    const compFilter = data.filter((todo) => todo.completed === false);
    setFilteredData(compFilter);
    setActionsOpen(false);
  };

  const setTodaysDate = () => {
    const date = new window.Date();
    const d = date.getDay();
    const m = date.getMonth();
    const md = date.getDate();
    const y = date.getFullYear();

    return `
      ${WeekdayLookup({ day: d })}${`, `}
      ${MonthLookup({ mo: m })}${` `}
      ${md}${MonthDayLookup({ mod: md })}${`, `}
      ${y}
    `;
  };

  // events
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onEditTitleChanged = (e) => setEditTitle(e.target.value);
  const onEditDescriptionChanged = (e) => setEditDescription(e.target.value);

  // toggle events
  const toggleFilters = () => setActionsOpen(!actionsOpen);

  // handlers
  // add todo
  const handleAddedTodo = () => {
    try {
      setRequestStatus("pending");
      dispatch(addNewTodo({ title, description, completed: false })).unwrap();

      setTitle("");
      setDescription("");
      navigate("/");
    } catch (err) {
      console.error("Failed to Save Todo", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  // edit todo
  const handleEditTodo = (e) => {
    const { id, completed } = e.currentTarget;
    const BoolCheck = Boolean(completed);
    // console.log(BoolCheck);
    // console.log(id);

    try {
      setRequestStatus("pending");
      dispatch(
        editTodo({
          title: editTitle,
          description: editDescription,
          completed: BoolCheck,
          id: id,
        })
      ).unwrap();

      setEditTitle("");
      setEditDescription("");
      navigate("/");
    } catch (err) {
      console.error("Failed to Edit Todo", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  // edit status
  const handleTodoStatus = (e) => {
    const { id, checked } = e.target;
    const numCheck = Number(id);
    // console.log(numCheck);
    // console.log(checked);

    try {
      setRequestStatus("pending");
      dispatch(updateTodoStatus({ id: numCheck, completed: checked })).unwrap();
    } catch (err) {
      console.error("Could not update Todo Status", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  // delete todo
  const handleTodoDelete = (e) => {
    const { id } = e.target;
    const numCheck = Number(id);
    // console.log(numCheck);
    // console.log(id);

    try {
      setRequestStatus("pending");
      dispatch(deleteTodo({ id: numCheck })).unwrap();

      setTitle("");
      setDescription("");
      navigate("/");
    } catch (err) {
      console.error("Could not delete Todo", err);
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

        // context state
        data,
        setData,
        filteredData,
        setFilteredData,
        title,
        setTitle,
        editTitle,
        setEditTitle,
        editDescription,
        setEditDescription,
        description,
        setDescription,
        requestStatus,
        setRequestStatus,
        completeCount,
        setCompleteCount,
        incompleteCount,
        setIncompleteCount,
        totalCount,
        setTotalCount,
        date,
        setDate,
        actionsOpen,
        setActionsOpen,

        // global functions
        setTodaysDate,
        resetFilteredData,
        filterComplete,
        filterIncomplete,

        // events
        onTitleChanged,
        onDescriptionChanged,
        onEditTitleChanged,
        onEditDescriptionChanged,

        // toggle events
        toggleFilters,

        // handlers
        handleAddedTodo,
        handleEditTodo,
        handleTodoStatus,
        handleTodoDelete,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export default StateContext;
