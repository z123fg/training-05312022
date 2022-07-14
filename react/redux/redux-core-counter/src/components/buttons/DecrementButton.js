import React from "react";
import { dispatch } from "../../redux/redux";
import { SecondaryButton } from "./ButtonGroup";

const DecrementButton = () => {
  const handleDecrement = () => {
    dispatch({ type: "COUNTER_DECREMENT" });
  };

  return (
    <>
      <SecondaryButton onClick={handleDecrement}>-</SecondaryButton>
    </>
  );
};
export default DecrementButton;