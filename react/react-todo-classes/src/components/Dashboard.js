import React from "react";
import styled from "styled-components";
import {
  completeConfig,
  incompleteConfig,
  totalConfig,
} from "../utils/appConfig";
import StateContext from "./context/StateContext";
import { SectionContainer } from "./Layout";

const DataCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: var(--card-radius);
  background-color: var(--clr-secondary);

  @media (min-width: 40rem) {
  }
  @media (min-width: 60rem) {
    justify-content: space-between;
    flex-direction: row;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: var(--card-radius);

    @media (min-width: 40rem) {
    }
    @media (min-width: 60rem) {
      justify-content: space-between;
      flex-direction: row;
      width: 30%;
    }
  }

  h3 {
    width: 100%;
  }

  @media (min-width: 40rem) {
  }
  @media (min-width: 60rem) {
  }
`;

export default class Dashboard extends React.Component {
  static contextType = StateContext

  render() {
    const { todos, incompleteCount, completeCount } = this.context

    const incomplete = incompleteConfig;
    const complete = completeConfig;
    const total = totalConfig;

    return (
      <SectionContainer>
        <h2>Dashboard</h2>
        <DataCard>
          <div style={{ color: incomplete.color, border: incomplete.border }}>
            <h3 style={{ color: incomplete.color }}>{incomplete.name}</h3>

            <span style={{ color: incomplete.color }}>
              <strong>{incompleteCount}</strong>
            </span>
          </div>

          <div style={{ color: complete.color, border: complete.border }}>
            <h3 style={{ color: complete.color }}>{complete.name}</h3>

            <span style={{ color: complete.color }}>
              <strong>{completeCount}</strong>
            </span>
          </div>

          <div style={{ color: total.color, border: total.border }}>
            <h3 style={{ color: total.color }}>{total.name}</h3>

            <span style={{ color: total.color }}>
              <strong>{todos.length}</strong>
            </span>
          </div>
        </DataCard>
      </SectionContainer>
    );
  }
}