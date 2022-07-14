import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import AddTodo from "./buttons/AddTodo";

const StyledAppLayout = styled.div`
  header {
    display: block;
  }
  footer {
    display: block;
  }
  main {
    display: block;
    /* min-height: 100vh; */
    /* margin-top: calc(var(--grid-gutter) / 2); */
  }
`;

//

export const GContainer = styled.div`
  max-width: var(--max-layout-width);
  margin-right: auto;
  margin-left: auto;

  padding-left: calc(var(--grid-gutter) / 4);
  padding-right: calc(var(--grid-gutter) / 4);
  @media (min-width: 40rem) {
    padding-left: calc(var(--grid-gutter) / 2);
    padding-right: calc(var(--grid-gutter) / 2);
  }
  @media (min-width: 60rem) {
    padding-left: var(--grid-gutter);
    padding-right: var(--grid-gutter);
  }
`;
export const GMotionRoute = styled(motion.div)`
  display: block;
`

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <header>
        <GContainer>
          <h1>Header</h1>
        </GContainer>
      </header>

      <main>
        <Outlet />

        <footer>
          <GContainer>
            <h1>Footer</h1>
          </GContainer>
        </footer>

        <AddTodo />
      </main>
    </StyledAppLayout>
  );
};
export default AppLayout;
