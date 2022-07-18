import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icons from "../assets/Icons";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: calc(var(--grid-gutter) / 8);
  padding-right: calc(var(--grid-gutter) / 4);
  padding-left: calc(var(--grid-gutter) / 4);
  padding-top: calc(var(--grid-gutter) / 8);
  
  border-radius: calc(var(--card-radius) / 2);
  color: var(--clr-tertiary);
  border: var(--border);

  svg {
    justify-self: flex-start;
    height: calc(var(--grid-gutter) / 3.5);
    width: calc(var(--grid-gutter) / 3.5);

    @media (min-width: 60rem) {
      height: calc(var(--grid-gutter) / 3);
      width: calc(var(--grid-gutter) / 3);
    }
  }
`;
const Title = styled.span`
  margin-left: calc(var(--grid-gutter) / 4);
`;

const BreadCrumb = ({ title }) => {
  const navigate = useNavigate();
  const backlink = () => navigate(-1);

  return (
    <Button onClick={backlink}>
      <Icons name="Back" />
      <Title>{title}</Title>
    </Button>
  );
};
export default BreadCrumb;
