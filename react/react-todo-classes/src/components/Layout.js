import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

export const Container = styled.div`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(var(--grid-gutter) / 4);
  padding-right: calc(var(--grid-gutter) / 4);
`;

const Header = styled.header`
  padding-top: calc(var(--grid-gutter) / 4);
  padding-bottom: calc(var(--grid-gutter) / 4);
`;
const Footer = styled.footer``;
const Author = styled.div``;

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            {/* <HamburgerIcon /> */}
            {/* <SearchIcon /> */}

            {/* <NavDrawer /> */}
            {/* <SearchDrawer /> */}
          </nav>
        </Container>
      </Header>

      <main id="content">
        <Container>
          <Outlet />

          <Footer>
            <Author>
              © <a href="https://lenharta.netlify.app/">Developed by Andrew</a>,{" "}
              {new Date().getFullYear()}
            </Author>
          </Footer>
        </Container>
      </main>
    </>
  );
};
