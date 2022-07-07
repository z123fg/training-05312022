import React from "react";
import { dispatch } from "../../../redux/redux";


const Incrementbutton = () => {
  const handleIncrement = () => {
    dispatch({type:"COUNTER/INCREMENT"})
  }
  return (
    <button onClick={handleIncrement}>increment</button>
  ) 
}

export default Incrementbutton;