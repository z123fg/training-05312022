import { useContext, useEffect, useState } from "react";
import StateContext from "../../context/StateContext";
import TodoCard from "./TodoCard";
import styled from "styled-components";
import { GServerMsg } from "../../components/AppLayout";
import Icons from "../../components/assets/Icons";
import { motion } from "framer-motion";

const StyledTodoList = styled.section`
  margin-top: calc(var(--grid-gutter) / 4);
`;
const Filter = styled.section`
  padding: calc(var(--grid-gutter) / 4);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  background-color: var(--clr-secondary);
  border-radius: calc(var(--card-radius) / 2);
  color: var(--clr-tertiary);
`;
const Tab = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--clr-tertiary);
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: calc(var(--grid-gutter) / 4);
  margin-top: calc(var(--grid-gutter) / 4);
  @media (min-width: 60rem) {
    flex-direction: row;
  }
`;

const FilterBtn = styled.button`
  width: 100%;
  padding-top: calc(var(--grid-gutter) / 6);
  padding-bottom: calc(var(--grid-gutter) / 6);
  border: var(--border);
  border-radius: calc(var(--card-radius) / 2);
  color: var(--clr-tertiary);
  /* margin-top: calc(var(--grid-gutter) / 4); */
`;
const FilterTitle = styled.span`
  justify-self: flex-start;
`;

const TodoList = () => {

  const {
    filteredData,
    status,
    error,
    resetFilteredData,
    filterComplete,
    filterIncomplete,
    actionsOpen,
    toggleFilters,
  } = useContext(StateContext);

  return (
    <StyledTodoList>
      <Filter>
        <Tab>
          <MenuBtn onClick={toggleFilters}>
            <FilterTitle>Filter</FilterTitle>
            <Icons name="Add" />
          </MenuBtn>
        </Tab>

        {actionsOpen && (
          <Actions>
            <FilterBtn onClick={resetFilteredData}>All</FilterBtn>
            <FilterBtn onClick={filterComplete}>Complete</FilterBtn>
            <FilterBtn onClick={filterIncomplete}>Incomplete</FilterBtn>
          </Actions>
        )}
      </Filter>

      {status === "loading" && <GServerMsg>Loading...</GServerMsg>}

      {status === "succeeded" && (
        <>
          {filteredData.length === 0 ? (
            <GServerMsg>No Tasks To Display</GServerMsg>
          ) : (
            <>
              {filteredData.map((todo) => (
                <TodoCard key={`${todo.id}-item`} todo={todo} />
              ))}
            </>
          )}
        </>
      )}

      {status === "failed" && <GServerMsg>{error}</GServerMsg>}
    </StyledTodoList>
  );
};
export default TodoList;
