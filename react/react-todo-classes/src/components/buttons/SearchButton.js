import React from "react";
import StateContext from "../context/StateContext";

import Icons from "../icons/Icons";
import styled from "styled-components";
import { motion } from "framer-motion";
import { drawLine } from "../../utils/framerConfig";

const ButtonConatiner = styled.button`
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  svg {
    color: var(--clr-primary-text);
    height: calc(var(--grid-gutter) / 2.25 - 10px);
    width: calc(var(--grid-gutter) / 2.25 - 10px);
  }
  @media (min-width: 40rem) {
  }
  @media (min-width: 60rem) {
  }
`;

export default class SearchButton extends React.Component {
  static contextType = StateContext;

  render() {
    const { isSearchOpen, handleToggleSearch } = this.context;
    const ButtonAnimation = drawLine;

    return (
      <ButtonConatiner onClick={handleToggleSearch}>
        <IconWrapper>
          {isSearchOpen && (
            <motion.svg
              viewBox="0 0 100 100"
              initial="hidden"
              animate="visible"
            >
              <motion.line
                x1="10"
                y1="10"
                x2="90"
                y2="90"
                variants={ButtonAnimation}
                custom={1}
              />
              <motion.line
                x1="10"
                x2="90"
                y1="90"
                y2="10"
                variants={ButtonAnimation}
                custom={2}
              />
            </motion.svg>
          )}

          {!isSearchOpen && <Icons name="Search" />}
        </IconWrapper>
      </ButtonConatiner>
    );
  }
}
