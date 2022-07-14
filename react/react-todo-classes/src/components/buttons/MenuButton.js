import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { drawLine } from "../../utils/framerConfig";
import StateContext from "../context/StateContext";

const ButtonContainer = styled.button`
  background: transparent;
  position: relative;

  line {
    stroke: var(--clr-primary-text);
    stroke-width: 5;
  }

  height: calc(var(--grid-gutter) / 2.25);
  width: calc(var(--grid-gutter) / 2.25);
  @media (min-width: 40rem) {
  }
  @media (min-width: 60rem) {
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  z-index: 5;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  height: calc(var(--grid-gutter) / 2.25);
  width: calc(var(--grid-gutter) / 2.25);
  svg {
    height: calc(var(--grid-gutter) / 2.25);
    width: calc(var(--grid-gutter) / 2.25);
  }
  @media (min-width: 40rem) {
    svg {
    }
  }
  @media (min-width: 60rem) {
    svg {
    }
  }
`;

export default class MenuButton extends React.Component {
  static contextType = StateContext;

  render() {
    const { isMenuOpen, handleToggleMenu } = this.context
    const ButtonAnimation = drawLine;

    return (
      <>
        <ButtonContainer onClick={handleToggleMenu}>
          <IconWrapper>
            {isMenuOpen && (
              <motion.svg
                viewBox="0 0 100 100"
                initial="hidden"
                animate="visible"
              >
                <motion.line
                  x1="10"
                  y1="10" // left top
                  x2="90"
                  y2="90" // right top
                  variants={ButtonAnimation}
                  custom={1}
                />
                <motion.line
                  x1="10"
                  x2="90"
                  y1="90" // left bottom
                  y2="10" // right bottom
                  variants={ButtonAnimation}
                  custom={2}
                />
              </motion.svg>
            )}
            {!isMenuOpen && (
              <motion.svg
                viewBox="0 0 100 100"
                animate="visible"
                initial="hidden"
              >
                <motion.line
                  variants={ButtonAnimation}
                  custom={1}
                  x1="10"
                  x2="90"
                  y1="20"
                  y2="20"
                />
                <motion.line
                  variants={ButtonAnimation}
                  custom={2}
                  x1="10"
                  x2="90"
                  y1="50"
                  y2="50"
                />
                <motion.line
                  variants={ButtonAnimation}
                  custom={3}
                  x1="10"
                  x2="90"
                  y1="80"
                  y2="80"
                />
              </motion.svg>
            )}
          </IconWrapper>
        </ButtonContainer>
      </>
    );
  }
}