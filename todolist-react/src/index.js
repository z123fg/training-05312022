import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList";

import "./App.css";

import {
  getTodos,
  addTodo,
  deleteTodo,
  completeTodo,
  unfinishTodo,
} from "./utils/API";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export default function App() {
  const [todos, setTodos] = useState([]);

  const refreshTodos = () => {
    getTodos().then((res) => {
      if (res) {
        setTodos(res);
      }
    });
  };
  useEffect(() => {
    refreshTodos();
  }, []);

  return (
    <>
      <TodoInput addTodo={addTodo} refreshTodos={refreshTodos} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        unfinishTodo={unfinishTodo}
        refreshTodos={refreshTodos}
      />
    </>
  );
}

root.render(<App />);
