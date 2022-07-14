import React from "react";
import { useDispatch } from "react-redux";

import { set } from "../../../app/store/calculatorSlice";

export default function CalculatorButton({ button, currentValue }) {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    if (button.symbol === "=") {
      try {
        let evaluation = eval(currentValue);
        dispatch(set(evaluation));
        console.log(evaluation);
      } catch (err) {
        console.log("An error has occurred");
      }
    } else {
      button.function();
    }
  };
  return (
    <span
      className={button.class}
      id={button.symbol}
      onClick={(event) => {
        handleClick(event);
      }}
    >
      {button.symbol}
    </span>
  );
}
