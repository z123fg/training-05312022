import React from "react";

export default function CalculatorButton({ button }) {
  const handleClick = (event) => {
    event.preventDefault();
    switch (typeof button.value) {
      case "string":
        console.log(button.value);
        break;
      case "function":
        console.log(button.symbol);
        break;
      default:
        console.log(button);
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
