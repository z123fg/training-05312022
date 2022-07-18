import { Link } from "react-router-dom";
import styled from "styled-components";
import { GContainer } from "./AppLayout";

const Author = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: calc(var(--grid-gutter) / 4);
  margin-top: calc(var(--grid-gutter) * 2);
  margin-bottom: calc(var(--grid-gutter) / 4);
  border-radius: calc(var(--card-radius) / 2);
  color: var(--clr-tertiary);
  a {
    color: var(--clr-tertiary);
  }

  @media (min-width: 60rem) {
  }
`;

export const FooterLogo = styled(Link)`
  width: 100%;
  display: inline-flex;
  padding: calc(var(--grid-gutter) / 4);
  
  font-size: 1.5rem;
  color: var(--clr-tertiary);
  background-color: var(--clr-secondary);
  border-radius: calc(var(--card-radius) / 2);
  span {
    color: var(--clr-secondary-accent);
    strong {
      color: var(--clr-primary-accent);
    }
  }
`;

const Copy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--grid-gutter) / 4);
  background-color: var(--clr-primary);
  border-radius: calc(var(--card-radius) / 2);
  padding: calc(var(--grid-gutter) / 4);
  color: var(--clr-tertiary);
  background-color: var(--clr-secondary);
  opacity: 0.8;

  @media (min-width: 60rem) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Footer = () => {
  return (
    <footer>
      <Author>
        <FooterLogo to="/">
          <span>
            CORT<strong>X</strong>
          </span>
        </FooterLogo>
        <Copy>
          {/* Will Change Link When Repo cloned */}

          <p>Demo - No Rights Reserved</p>

          <Link to="https://github.com/lenharta">
            @lenharta, {new Date().getFullYear()}
          </Link>

          <Link to="https://github.com/z123fg/training-05312022">
            View the code
          </Link>
        </Copy>
      </Author>
    </footer>
  );
};
export default Footer;