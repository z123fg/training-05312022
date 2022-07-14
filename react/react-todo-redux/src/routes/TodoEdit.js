import React from "react";
import { GContainer, GMotionRoute } from "../components/AppLayout";
import { pageTransitionRight } from "../utils/motionConfig";

const TodoEdit = () => {
  return (
    <GMotionRoute
      variants={pageTransitionRight}
      initial="hidden"
      animate="show"
    >
      <section id="todoEditRoute">
        <GContainer>
          <header>
            <h1>TodoEdit</h1>
          </header>
        </GContainer>
      </section>
    </GMotionRoute>
  );
};
export default TodoEdit;
