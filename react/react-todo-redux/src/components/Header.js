import { Link } from "react-router-dom";
import styled from "styled-components";
import { GContainer } from "./AppLayout";

const StyledHeader = styled.header`
  position: fixed;
  display: block;
  z-index: 100;
  right: 0;
  left: 0;
  top: 0;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  margin-top: calc(var(--grid-gutter) / 4);
  margin-bottom: calc(var(--grid-gutter) / 4);
  z-index: 102;
  opacity: 0.9;
  position: relative;
`;

const Filter = styled.div`
  /* outline: solid 1px red; */
  border-radius: calc(var(--card-radius) / 2);
  /* background-color: red; */
  background-color: var(--clr-primary);
  opacity: 0.7;
  filter: blur(5px);
  position: absolute;
  z-index: 100;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

const HeaderLogo = styled(Link)`
  width: 100%;
  display: inline-flex;
  padding: calc(var(--grid-gutter) / 4);
  font-size: 1.5rem;
  background-color: var(--clr-secondary);
  color: var(--clr-tertiary);
  border-radius: calc(var(--card-radius) / 2);
  /* border: var(--border); */
  span {
    z-index: 105;
    opacity: 1;
    color: var(--clr-secondary-accent);
    strong {
      color: var(--clr-primary-accent);
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <GContainer>
        <Filter />
        <Inner>
          <HeaderLogo to="/">
            <span>
              CORT<strong>X</strong>
            </span>
          </HeaderLogo>
        </Inner>
      </GContainer>
    </StyledHeader>
  );
};
export default Header;
