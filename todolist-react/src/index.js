import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList";

import "./App.css";

import { getTodos, addTodo, deleteTodo } from "./utils/API";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((res) => {
      if (res) {
        setTodos(res);
      }
    });
  }, []);

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

root.render(<App />);
