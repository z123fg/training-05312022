import React from "react";
import styled from "styled-components";

import MobileMenu from "./header/MobileMenu";
import Search from "./header/Search";
import { Outlet } from "react-router-dom";

// Global Containers
export const Container = styled.div`
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media (min-width: 40rem) {
  }
  @media (min-width: 60rem) {
  }
`;
export const RouteSection = styled.section`
  display: block;

  @media (min-width: 40rem) {
  }
  @media (min-width: 60rem) {
  }
`;
export const SectionContainer = styled.section`
  display: block;

  @media (min-width: 40rem) {
  }
  @media (min-width: 60rem) {
  }
`;
// Errors
export const NoDataMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--clr-secondary);
  border-radius: var(--card-radius);
`;
export const LoadingMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--clr-secondary);
  border-radius: var(--card-radius);
`;
// Layout
const Header = styled.header`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-secondary);
`;

export default class Layout extends React.Component {
  
  render() {
    return (
      <>
        <Header>
          <Container>
            <nav>
              <MobileMenu />
              <Search />
            </nav>
          </Container>
        </Header>

        <main id="content">
          <Outlet />
        </main>

        <Footer>
          <Container>
            <span>
              @ <a href="https://lenharta.netlify.app/">Developed by Andrew</a>,{" "}
              {new window.Date().getFullYear()}
            </span>
          </Container>
        </Footer>
      </>
    );
  }
}
