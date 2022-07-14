import React, { useEffect, useState } from "react";
import { getState, subscribe } from "../redux/redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  border-radius: 0.5rem;

  border: solid 4px #000000;
  h1 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 1rem;
    padding-top: 1rem;

    border-radius: 0.5rem;
    background-color: #cccccc;
    color: #8000ff;

    span {
      font-size: 1.75rem;
      margin-left: 0.5rem;
      color: #8000ff;
    }
  }
`;

const CounterBoard = () => {
  const [counter, setCounter] = useState(getState().counter);
  useEffect(() => {
    subscribe(() => {
      setCounter(getState().counter);
    });
  }, []);
  return (
    <Wrapper>
      <h1>
        The current count is: <span>{counter}</span>
      </h1>
    </Wrapper>
  );
};
export default CounterBoard;