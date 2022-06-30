import React, { Component } from "react";
import { createRoot } from "react-dom/client";

import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export default class App extends Component {
  render() {
    return (
      <>
        <TodoInput />
        <TodoList />
      </>
    );
  }
}

root.render(<App />);
