import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { slideSearch } from "../../utils/framerConfig";
import StateContext from "../context/StateContext";
// import a new slideSearch animation from framer config

const SearchForm = styled(motion.form)`
  width: min(85vw, 500px);
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  right: 0;
  top: 0;

  // may edit when grid padding is added
  background-color: var(--clr-secondary);
  border-top-left-radius: calc(var(--card-radius) * 1.5);
  border-bottom-left-radius: calc(var(--card-radius) * 1.5);
  border: solid 2px var(--clr-tertiary);

  height: calc(var(--grid-gutter) / 2.25);
  padding-left: calc(var(--grid-gutter) / 4);
  padding-right: calc(var(--grid-gutter) / 4);
  @media (min-width: 40rem) {
  }
  @media (min-width: 80rem) {
    margin-right: calc(var(--spacing-unit) * -1);
    border-radius: calc(var(--card-radius) * 1.5);
  }
`;
const SearchInput = styled.input`
  width: 100%;
`;

export default class SearchDrawer extends React.Component {
  static contextType = StateContext;

  render() {
    const { search, setSearch, isSearchOpen, searchResults } = this.context;
    const DrawerAnimation = slideSearch;

    return (
      <>
        <AnimatePresence>
          {isSearchOpen && (
            <SearchForm
              onSubmit={(e) => e.preventDefault()}
              variants={DrawerAnimation}
              initial="hidden"
              animate="show"
              exit="remove"
            >
              <SearchInput
                id="search"
                type="text"
                placeholder="Search Tasks"
                value={search}
                onChange={(e) => setSearch(e)}
              />
            </SearchForm>
          )}
        </AnimatePresence>
      </>
    );
  }
}
