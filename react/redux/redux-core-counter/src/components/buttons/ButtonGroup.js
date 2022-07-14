import React from "react";
import styled from "styled-components";
import ClearButton from "./ClearButton";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
`;
const ButtonsWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
`;

// Buttons
export const SecondaryButton = styled.button`
  width: 50%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  font-size: 2rem;
  border-radius: 0.5rem;
  background-color: #000;
  color: #f2f2f2;
  border: none;
`;
export const PrimaryButton = styled.button`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 2rem;

  border-radius: 0.5rem;
  background-color: #8000ff;
  color: #f2f2f2;
  border: none;
`;

const ButtonGroup = () => {
  return (
    <Wrapper>
      <ButtonsWrapper>
        <IncrementButton />
        
        <DecrementButton />
      </ButtonsWrapper>

      <ClearButton />
    </Wrapper>
  );
};
export default ButtonGroup;