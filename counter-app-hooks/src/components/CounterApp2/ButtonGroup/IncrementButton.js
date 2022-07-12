import React from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { TestContext } from "../../../App";

const Incrementbutton = () => {

  const {handleIncrementTestCounter} = useContext(TestContext)
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "COUNTER/INCREMENT" });
  };
  return (
    <>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleIncrementTestCounter}>increment context counter</button>
    </>
  );
};

export default Incrementbutton;
