import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import AddTodo from "./buttons/AddTodo";
import Header from "./Header";

export const GMotionRoute = styled(motion.div)`
  display: block;
  margin-top: var(--grid-gutter);
`;

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

export const GModalContainer = styled(motion.section)``;

export const GRouteHeader = styled.header`
  padding: calc(var(--grid-gutter) / 4);
  margin-top: calc(var(--grid-gutter) / 1.5);

  border: var(--border);
  color: var(--clr-tertiary);
  background-color: var(--clr-secondary);
  border-radius: calc(var(--card-radius) / 2);
`;
export const GSectionHeader = styled.header`
  padding: calc(var(--grid-gutter) / 4);
  margin-top: calc(var(--grid-gutter) / 2);

  opacity: 0.8;
  font-size: 1.2rem;
  border: var(--border);
  color: var(--clr-tertiary);
  background-color: var(--clr-secondary);
  border-radius: calc(var(--card-radius) / 2);
`;

export const GForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  label {
    padding: calc(var(--grid-gutter) / 4);
    margin-top: calc(var(--grid-gutter) / 4);

    border: var(--border);
    color: var(--clr-secondary-accent);
    border-radius: calc(var(--card-radius) / 2);
  }
`;
export const GTextInput = styled.input`
  padding: calc(var(--grid-gutter) / 4);
  margin-top: calc(var(--grid-gutter) / 4);
  
  color: var(--clr-tertiary);
  background-color: var(--clr-secondary);
  border-radius: calc(var(--card-radius) / 2);

  &:focus-visible {
    outline: none;
  }
`;
export const GTextarea = styled.textarea`
  word-wrap: break-word;
  min-height: calc(var(--grid-gutter) * 4);
  margin-top: calc(var(--grid-gutter) / 4);
  padding: calc(var(--grid-gutter) / 4);

  border-radius: calc(var(--card-radius) / 2);
  background-color: var(--clr-secondary);
  color: var(--clr-tertiary);
  border: none;   
  resize: none;

  &:focus-visible {
    outline: none;
  }
`;
export const SubmitButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: calc(var(--grid-gutter) / 4);
  padding-top: calc(var(--grid-gutter) / 4);
  padding-bottom: calc(var(--grid-gutter) / 4);

  border-radius: calc(var(--card-radius) / 2);
  color: var(--clr-primary-accent);
  border: var(--border);
`;

export const GServerMsg = styled.h2`
  display: block;
  padding-bottom: calc(var(--grid-gutter) / 2);
  padding-right: calc(var(--grid-gutter) / 4);
  padding-left: calc(var(--grid-gutter) / 4);
  padding-top: calc(var(--grid-gutter) / 2);
  margin-top: calc(var(--grid-gutter) / 4);

  color: var(--clr-tertiary);
  border-radius: var(--card-radius);
  background-color: var(--clr-secondary);
`;

const AppLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />

        <AddTodo />
      </main>
    </>
  );
};
export default AppLayout;
