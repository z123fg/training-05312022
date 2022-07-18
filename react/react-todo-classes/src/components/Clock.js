import React from "react";
import styled from "styled-components";
import { MonthDayLookup, MonthLookup, WeekdayLookup } from "../utils/appConfig";

const ClockWrapper = styled.div``;

const ClockDate = styled.h2`
  color: var(--clr-primary-accent);
`;

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [],
    };
  }

  componentDidMount = () => {
    this.getTodaysDate();
  };

  getTodaysDate = () => {
    const date = new window.Date();
    const d = date.getDay();
    const m = date.getMonth();
    const md = date.getDate();
    const y = date.getFullYear();

    const formatDate = `
      ${WeekdayLookup({ day: d })}${`, `}
      ${MonthLookup({ mo: m })}${` `}
      ${md}${MonthDayLookup({ mod: md })}${`, `}
      ${y}
    `;

    this.setState({
      date: formatDate,
    });
  };

  render() {
    const todaysDate = this.state.date;

    return (
      <ClockWrapper>
        <ClockDate>{todaysDate}</ClockDate>
      </ClockWrapper>
    );
  }
}
