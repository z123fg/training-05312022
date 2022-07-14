import React from "react";
import styled from "styled-components";
import { completeConfig, incompleteConfig } from "../../utils/appConfig";
import Icons from "../icons/Icons";

const ButtonContainer = styled.button`
  height: calc(var(--grid-gutter) / 3);
  width: calc(var(--grid-gutter) / 3);

  @media (min-width: 40rem) {
    height: calc(var(--grid-gutter) / 2.5);
    width: calc(var(--grid-gutter) / 2.5);
  }
  @media (min-width: 60rem) {
    height: calc(var(--grid-gutter) / 2);
    width: calc(var(--grid-gutter) / 2);
  }
`;

export default class StatusButton extends React.Component {
  render() {
    const onClick = this.props.onClick;
    const isComplete = this.props.isComplete;

    const complete = completeConfig; // styles
    const incomplete = incompleteConfig; // styles

    //

    return (
      <ButtonContainer onClick={onClick}>
        <span style={{ color: isComplete ? complete.color : incomplete.color }}>
          <Icons name={isComplete ? complete.name : incomplete.name} />
        </span>
      </ButtonContainer>
    );
  }
}