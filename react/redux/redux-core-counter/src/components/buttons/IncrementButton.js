import React from "react";
import { dispatch } from "../../redux/redux";
import { SecondaryButton } from "./ButtonGroup";

const IncrementButton = () => {
  const handleIncrement = () => {
    dispatch({ type: "COUNTER_INCREMENT" });
  };
  return (
    <>
      <SecondaryButton onClick={handleIncrement}>+</SecondaryButton>
    </>
  );
};
export default IncrementButton;