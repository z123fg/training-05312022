import React from "react";
import { dispatch } from "../../../redux/redux";



const DecrementButton = () => {
  const handleDecrement = () => {
    dispatch({type:"COUNTER/DECREMENT"})
  }
  return (
    <button onClick={handleDecrement}>decrement</button>
  ) 
}

export default DecrementButton;