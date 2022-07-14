import React from "react";
import styled from "styled-components";
import SelectMenu from "./components/SelectMenu";
import GlobalStyle from "./styles/GlobalStyle";

const StyledMain = styled.main`
  background-color: #aab8c2;

  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 100vh;
  width: 100vw;
  color: #14171a;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #e1e8ed;
  border-radius: 1rem;
  align-self: flex-start;
  color: #1da1f2;
  width: 100%;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <Heading>React Checkbox Component</Heading>
        <SelectMenu />
      </StyledMain>
    </>
  );
};
export default App;
