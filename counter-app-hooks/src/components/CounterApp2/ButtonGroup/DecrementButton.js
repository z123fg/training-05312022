import React from "react";
import { useDispatch } from "react-redux";

const DecrementButton = () => {
  const dispatch = useDispatch();
  const handleDecrement = () => {
    dispatch({ type: "COUNTER/DECREMENT" });
  };
  return (
    <>
      <button onClick={handleDecrement}>decrement</button>
     
    </>
  );
};

export default DecrementButton;
