import React from "react";


const IncrementButton = ({handleIncrement}) => {
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