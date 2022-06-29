import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>

      {/* <li>{todoList[0].content}</li> */}
      <TodoList />
      {/* {todoList.map((item) => (
          <TodoList key={item.id} item={item} />
        ))} */}
    </div>
  );
}

export default App;
