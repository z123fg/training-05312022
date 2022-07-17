import React from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { TestContext } from "../../../App";
import { incrementAndPrint } from "../../../redux/redux";

const IncrementButton = ({handleIncrement}) => {
  const {handleIncrementTestCounter} = useContext(TestContext);
  const dispatch = useDispatch();
  const handleIncrement =() =>{
      dispatch (incrementAndPrint());
    }
  
    return (
      <>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleIncrementTestCounter}>increment context counter</button>
      </>
    )
};

export default IncrementButton;