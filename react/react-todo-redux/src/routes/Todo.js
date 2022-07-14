import React from "react";
import { GContainer, GMotionRoute } from "../components/AppLayout";
import { pageTransitionRight } from "../utils/motionConfig";

const Todo = () => {
  return (
    <GMotionRoute
      variants={pageTransitionRight}
      initial="hidden"
      animate="show"
    >
      <section id="dashboardRoute">
        <GContainer>
          <header>
            <h1>Todo Route</h1>
          </header>

        </GContainer>
      </section>
    </GMotionRoute>
  );
};
export default Todo;