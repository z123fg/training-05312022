import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import EditTodo from "./routes/EditTodo";
import NewTodo from "./routes/NewTodo";
import Home from "./routes/Home";
import Todo from "./routes/Todo";
import { StateProvider } from "./components/context/StateContext";

export const testArr = [
  { id: 0, title: "Example Task", isCompleted: false },
  { id: 1, title: "Example Task", isCompleted: true },
  { id: 2, title: "Example Task", isCompleted: true },
  { id: 3, title: "Example Task", isCompleted: false },
  { id: 4, title: "Example Task", isCompleted: false },
  { id: 5, title: "Example Task", isCompleted: false },
  { id: 6, title: "Example Task", isCompleted: true },
  { id: 7, title: "Example Task", isCompleted: true },
  { id: 8, title: "Example Task", isCompleted: false },
  { id: 9, title: "Example Task", isCompleted: true },
  { id: 10, title: "Example Task", isCompleted: true },
];

export default class App extends React.Component {

  render() {
    return (
      <StateProvider>
        <> 
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="todos">
                <Route index element={<NewTodo />} />
                <Route path=":id" element={<Todo />} />
              </Route>

              <Route path="edit/:id" element={<EditTodo />} />
            </Route>
          </Routes>
        </>
      </StateProvider>
    );
  }
}
