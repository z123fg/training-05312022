import React from "react";
import "./Calculator.css";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  square,
  squareRoot,
  backspace,
  clear,
  selectValue,
} from "../../../app/store/calculatorSlice";
import CalculatorButton from "../CalculatorButton/";

export default function Calculator() {
  const value = useSelector(selectValue);
  const dispatch = useDispatch();
  const buttonRows = [
    [
      {
        symbol: "%",
        function: () => dispatch(add("%")),
        class: "calculator--action--external",
        disabled: true,
      },
      {
        symbol: "CE",
        function: () => dispatch(clear()),
        class: "calculator--action--external",
      },
      {
        symbol: "C",
        function: () => dispatch(clear()),
        class: "calculator--action--external",
      },
      {
        symbol: "🡄",
        function: () => dispatch(backspace()),
        class: "calculator--action--external",
      },
    ],
    [
      {
        symbol: "1/x",
        function: () => console.log("Todo 1/x"),
        class: "calculator--action--external",
        disabled: true,
      },
      {
        symbol: "x²",
        function: () => dispatch(square()),
        class: "calculator--action--external",
      },
      {
        symbol: "√",
        function: () => dispatch(squareRoot()),
        class: "calculator--action--external",
      },
      {
        symbol: "/",
        function: () => dispatch(add("/")),
        class: "calculator--action--external",
      },
    ],
    [
      {
        symbol: "7",
        function: () => dispatch(add("7")),
        class: "calculator--action--internal",
      },
      {
        symbol: "8",
        function: () => dispatch(add("8")),
        class: "calculator--action--internal",
      },
      {
        symbol: "9",
        function: () => dispatch(add("9")),
        class: "calculator--action--internal",
      },
      {
        symbol: "*",
        function: () => dispatch(add("*")),
        class: "calculator--action--external",
      },
    ],
    [
      {
        symbol: "4",
        function: () => dispatch(add("4")),
        class: "calculator--action--internal",
      },
      {
        symbol: "5",
        function: () => dispatch(add("5")),
        class: "calculator--action--internal",
      },
      {
        symbol: "6",
        function: () => dispatch(add("6")),
        class: "calculator--action--internal",
      },
      {
        symbol: "-",
        function: () => dispatch(add("-")),
        class: "calculator--action--external",
      },
    ],
    [
      {
        symbol: "1",
        function: () => dispatch(add("1")),
        class: "calculator--action--internal",
      },
      {
        symbol: "2",
        function: () => dispatch(add("2")),
        class: "calculator--action--internal",
      },
      {
        symbol: "3",
        function: () => dispatch(add("3")),
        class: "calculator--action--internal",
      },
      {
        symbol: "+",
        function: () => dispatch(add("+")),
        class: "calculator--action--external",
      },
    ],
    [
      {
        symbol: "±",
        function: () => console.log("Todo ±"),
        class: "calculator--action--internal",
        disabled: true,
      },
      {
        symbol: "0",
        function: () => dispatch(add("0")),
        class: "calculator--action--internal",
      },
      {
        symbol: ".",
        function: () => dispatch(add(".")),
        class: "calculator--action--internal",
      },
      {
        symbol: "=",
        function: () => dispatch(add("=")),
        class: "calculator--action--equals",
      },
    ],
  ];
  return (
    <div className="CalculatorWrapper">
      <span
        className="calculator--input"
      >{value === "" || typeof value === "undefined" ? "0" : value}</span>
      {buttonRows.map((row, index) => {
        return (
          <div className="calculator--actions--row" key={index}>
            {row.map((button, index) => {
              return <CalculatorButton button={button} currentValue={value} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
