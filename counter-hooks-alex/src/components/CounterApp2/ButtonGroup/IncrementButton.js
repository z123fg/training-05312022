import React from "react";
import { useDispatch } from "react-redux";

const IncrementButton = ({handleIncrement}) => {
  const dispatch = useDispatch();
  const handleIncrement =() =>{
      dispatch ({type:"COUNTER/DECREMENT"})
    }
  
    return (
      <>
      <button onClick={handleIncrement}>increment</button>
      </>
    )
};

export default IncrementButton;