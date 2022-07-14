import React from "react";
import { GContainer, GMotionRoute } from "../components/AppLayout";
import TodoList from "../features/todos/TodoList";
import { pageTransitionRight } from "../utils/motionConfig";

const Dashboard = () => {
  return (
    <GMotionRoute
      variants={pageTransitionRight}
      initial="hidden"
      animate="show"
    >
      <section id="dashboardRoute">
        <GContainer>
          <header>
            <h1>Dashboard</h1>
          </header>

          <TodoList />
        </GContainer>
      </section>
    </GMotionRoute>
  );
};
export default Dashboard;
