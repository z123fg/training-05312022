import {
  GContainer,
  GMotionRoute,
  GSectionHeader,
} from "../components/AppLayout";
import { pageTransitionLeft } from "../utils/motionConfig";
import styled from "styled-components";
import { BreadCrumb, NoMatchLogo } from "../components";

const GraphicWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: calc(var(--grid-gutter) * 2);
  margin-bottom: calc(var(--grid-gutter) * 2);
  svg {
    width: 75%;
    height: 75%;
    &:hover{
      opacity: 1;
    }
  }

  @media (min-width: 60rem) {
    margin-top: calc(var(--grid-gutter) * 1.5);
    margin-bottom: calc(var(--grid-gutter) * 1.5);
    svg {
    width: 50%;
    height: 50%;
  }
  }
`;

const NoMatch = () => {
  return (
    <GMotionRoute variants={pageTransitionLeft} initial="hidden" animate="show">
      <section id="noMatchRoute">
        <GContainer>
          <BreadCrumb title="Go Home" />

          <GSectionHeader>
            <h2>Error 404, Page Not Found...</h2>
          </GSectionHeader>

          <GraphicWrapper>
            <NoMatchLogo />
          </GraphicWrapper>
        </GContainer>
      </section>
    </GMotionRoute>
  );
};
export default NoMatch;
