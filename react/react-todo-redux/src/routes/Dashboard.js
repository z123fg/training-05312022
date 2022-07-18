import React from "react";
import {
  GContainer,
  GMotionRoute,
  GRouteHeader,
  GSectionHeader,
} from "../components/AppLayout";
import { Clock, CounterBoard, Footer } from "../components";
import { pageTransitionRight } from "../utils/motionConfig";
import TodoList from "../features/todos/TodoList";

const Dashboard = () => {
  return (
    <GMotionRoute
      variants={pageTransitionRight}
      initial="hidden"
      animate="show"
    >
      <section id="dashboardRoute">
        <GContainer>
          <GSectionHeader>
            <h2>DASHBOARD</h2>
          </GSectionHeader>

          <Clock />

          <CounterBoard />

          <GSectionHeader>
            <h2>TODOS</h2>
          </GSectionHeader>

          <TodoList />
          
          <Footer />
        </GContainer>
      </section>
    </GMotionRoute>
  );
};
export default Dashboard;
