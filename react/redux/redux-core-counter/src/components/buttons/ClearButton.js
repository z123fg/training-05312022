import React from "react";
import { dispatch } from "../../redux/redux";
import { PrimaryButton } from "./ButtonGroup";

const ClearButton = () => {
  const handleClearCounter = () => {
    dispatch({ type: "COUNTER_CLEAR" });
  };
  return (
    <>
      <PrimaryButton onClick={handleClearCounter}>Clear Count</PrimaryButton>
    </>
  );
};
export default ClearButton;
