import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getState, subscribe } from "../../redux/redux";
import "./CounterBoard.css"
/* 
  Uni-directional data flow: only from parent to child, easier to trace bug, maintainable, decoupling
  state lifting(props drilling): drawback
*/


const CounterBoard = () => {
  const [counter, setCounter] = useState(getState().counter);
  useEffect(()=>{
    subscribe(()=>{
      setCounter(getState().counter);
    })
  },[]);
  return (
    <div className="counter-board">
      this is counter board
      <div>{counter}</div>
      </div>
  )
}

export default CounterBoard;