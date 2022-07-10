import React from "react";
import { useDispatch } from "react-redux";

const DecrementButton = ({handleDecrement}) => {
  const {handleDecrementTestCounter} = useContext(TestContext);
  const dispatch = useDispatch();


    return (
      <>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleDecrementTestCounter}>decrement context counter</button>
      </>
    ) 
}

export default DecrementButton;