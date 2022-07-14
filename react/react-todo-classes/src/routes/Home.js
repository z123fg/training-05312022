import React from "react";
import styled from "styled-components";
import { Container, RouteSection } from "../components/Layout";
import Clock from "../components/Clock";
import Dashboard from "../components/Dashboard";
import TodoCards from "../components/TodoCards";
import StateContext from "../components/context/StateContext";
import AddButton from "../components/buttons/AddButton";

const Greeting = styled.h1`
  color: var(--clr-primary-text);
`;

export default class Home extends React.Component {
  static contextType = StateContext;

  render() {
    const userName = "Adam";


    return (
      <>
        <Container>
          <RouteSection>
            <header>
              <Greeting>Welcome, {userName}!</Greeting>
              <Clock />
            </header>

            <Dashboard />

            <TodoCards />
          </RouteSection>
        </Container>

        <AddButton />
      </>
    );
  }
}
