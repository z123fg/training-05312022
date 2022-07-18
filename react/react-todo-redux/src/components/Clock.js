import { useContext, useEffect } from "react";
import styled from "styled-components";
import StateContext from "../context/StateContext";
import Icons from "./assets/Icons";

const ClockWrapper = styled.section`
  display: flex;
  align-items: center;
  color: var(--clr-tertiary);
  background-color: var(--clr-secondary);
  padding: calc(var(--grid-gutter) / 4);
  margin-top: calc(var(--grid-gutter) / 4);
  border-radius: calc(var(--card-radius) / 2);
`;
const Date = styled.h2`
  color: var(--clr-tertiary);
  margin-left: calc(var(--grid-gutter) / 4);
`;

const Clock = () => {
  const { date, setTodaysDate } = useContext(StateContext);

  useEffect(() => {
    setTodaysDate()
  }, [date])

  return(
    <ClockWrapper>
      <Icons name="Calendar" />
      <Date>{date}</Date>
    </ClockWrapper>
  )
}
export default Clock;