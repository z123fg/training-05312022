import { useContext } from "react";
import styled from "styled-components";
import StateContext from "../context/StateContext";
import Icons from "./assets/Icons";

const Board = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 60rem) {
    flex-direction: row;
    justify-content: space-between;
    gap: calc(var(--grid-gutter) / 4);
  }
`;
const IncompleteWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: calc(var(--grid-gutter) / 4);
  margin-top: calc(var(--grid-gutter) / 4);

  border-radius: calc(var(--card-radius) / 2);
  background-color: var(--clr-secondary);
  color: var(--clr-secondary-accent);

  div {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    h3 {
      margin-left: calc(var(--grid-gutter) / 4);
    }
  }

  span {
    font-size: 1.15rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);
  }

  @media (min-width: 60rem) {
    flex-direction: column;
    div {
      flex-direction: row;
      h3 {
        margin-left: 0;
        margin-right: calc(var(--grid-gutter) / 4);
      }
    }
    span {
      align-self: flex-end;
      margin-top: calc(var(--grid-gutter) / 4);
      font-size: 3.5rem;
    }
  }
`;
const CompleteWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: calc(var(--grid-gutter) / 4);
  margin-top: calc(var(--grid-gutter) / 4);

  border-radius: calc(var(--card-radius) / 2);
  background-color: var(--clr-secondary);
  color: var(--clr-primary-accent);

  div {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    h3 {
      margin-left: calc(var(--grid-gutter) / 4);
    }
  }

  span {
    font-size: 1.15rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);
  }

  @media (min-width: 60rem) {
    flex-direction: column;
    div {
      flex-direction: row;
      h3 {
        margin-left: 0;
        margin-right: calc(var(--grid-gutter) / 4);
      }
    }
    span {
      align-self: flex-end;
      margin-top: calc(var(--grid-gutter) / 4);
      font-size: 3.5rem;
    }
  }
`;
const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: calc(var(--grid-gutter) / 4);
  margin-top: calc(var(--grid-gutter) / 4);

  border-radius: calc(var(--card-radius) / 2);
  background-color: var(--clr-secondary);
  color: var(--clr-tertiary);

  div {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    h3 {
      margin-left: calc(var(--grid-gutter) / 4);
    }
  }

  span {
    font-size: 1.15rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);
  }

  @media (min-width: 60rem) {
    flex-direction: column;
    div {
      flex-direction: row;
      h3 {
        margin-left: 0;
        margin-right: calc(var(--grid-gutter) / 4);
      }
    }
    span {
      align-self: flex-end;
      font-size: 3.5rem;
      margin-top: calc(var(--grid-gutter) / 4);
    }
  }
`;

const CounterBoard = () => {
  const { completeCount, incompleteCount, totalCount } =
    useContext(StateContext);
  return (
    <Board>
      <IncompleteWrapper>
        <div>
          <h3>Incomplete</h3>
          <Icons name="Incomplete" />
        </div>
        <span>{incompleteCount}</span>
      </IncompleteWrapper>

      <CompleteWrapper>
        <div>
          <h3>Complete</h3>
          <Icons name="Complete" />
        </div>
        <span>{completeCount}</span>
      </CompleteWrapper>

      <TotalWrapper>
        <div>
          <h3>Total</h3>
          <Icons name="All" />
        </div>
        <span>{totalCount}</span>
      </TotalWrapper>
    </Board>
  );
};
export default CounterBoard;
