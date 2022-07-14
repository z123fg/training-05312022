import React from "react"
import styled from "styled-components"
import ButtonGroup from "./components/buttons/ButtonGroup";
import CounterBoard from "./components/CounterBoard";
import "./styles.css"

const Layout = styled.div`
  display: block;
  background-color: #f2f2f2;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const Main = styled.main`
  display: block;
`;
export const Container = styled.section`
  display: block;
  max-width: 40rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: auto;
  margin-left: auto;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #8000ff;
  color: #f2f2f2;

  h1 {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;

    border-radius: 0.5rem;
    border: solid 3px #f2f2f2;
    background-color: #000000;

    strong {
      color: #8000ff;
    }
  }
`;

const App = () => {
  return (
    <>
      <Layout>
        <Header>
          <Container>
            <h1>
              Counter App \\ <strong>Redux</strong>
            </h1>
          </Container>
        </Header>

        <Main>
          <Container>
            <CounterBoard />

            <ButtonGroup />
          </Container>
        </Main>
      </Layout>
    </>
  );
};
export default App;