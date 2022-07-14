import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route, useLocation } from "react-router-dom";
import { AppLayout } from "./components";
import { Dashboard, TodoNew, Todo } from "./routes";
import { AnimatePresence } from "framer-motion";
import { StateProvider } from "./context/StateContext";

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <AnimatePresence>
        <StateProvider>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />

              <Route path="todo">
                <Route index element={<TodoNew />} />
                <Route path=":todoId" element={<Todo />} />
              </Route>
            </Route>
          </Routes>
        </StateProvider>
      </AnimatePresence>
    </>
  );
};
export default App;
