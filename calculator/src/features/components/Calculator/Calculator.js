import React, { useState } from "react";
import "./Calculator.css";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  subtract,
  multiply,
  divide,
  square,
  squareRoot,
  selectValue,
} from "../../../app/store/calculatorSlice";
import CalculatorButton from "../CalculatorButton/";

const buttonRows = [
  [
    {
      symbol: "%",
      value: () => console.log("Todo %"),
      class: "calculator--action--external",
    },
    {
      symbol: "CE",
      value: () => console.log("Todo CE"),
      class: "calculator--action--external",
    },
    {
      symbol: "C",
      value: () => console.log("Todo C"),
      class: "calculator--action--external",
    },
    {
      symbol: "🡄",
      value: () => console.log("Todo 🡄"),
      class: "calculator--action--external",
    },
  ],
  [
    {
      symbol: "1/x",
      value: () => console.log("Todo 1/x"),
      class: "calculator--action--external",
    },
    {
      symbol: "x²",
      value: () => console.log("Todo x²"),
      class: "calculator--action--external",
    },
    {
      symbol: "√",
      value: () => console.log("Todo √"),
      class: "calculator--action--external",
    },
    {
      symbol: "/",
      value: () => console.log("Todo /"),
      class: "calculator--action--external",
    },
  ],
  [
    {
      symbol: "7",
      value: "7",
      class: "calculator--action--internal",
      type: "number",
    },
    {
      symbol: "8",
      value: "8",
      class: "calculator--action--internal",
      type: "number",
    },
    {
      symbol: "9",
      value: "9",
      class: "calculator--action--internal",
      type: "number",
    },
    {
      symbol: "X",
      value: () => console.log("Todo X"),
      class: "calculator--action--external",
    },
  ],
  [
    {
      symbol: "4",
      value: "4",
      class: "calculator--action--internal",
      type: "number",
    },
    {
      symbol: "5",
      value: "5",
      class: "calculator--action--internal",
      type: "number",
    },
    {
      symbol: "6",
      value: "6",
      class: "calculator--action--internal",
      type: "number",
    },
    {
      symbol: "-",
      value: () => console.log("Todo -"),
      class: "calculator--action--external",
    },
  ],
  [
    {
      symbol: "1",
      value: "1",
      class: "calculator--action--internal",
      type: "number",
    },
    {
      symbol: "2",
      value: "2",
      class: "calculator--action--internal",
      type: "number",
    },
    {
      symbol: "3",
      value: "3",
      class: "calculator--action--internal",
      type: "number",
    },
    {
      symbol: "+",
      value: () => console.log("Todo +"),
      class: "calculator--action--external",
    },
  ],
  [
    {
      symbol: "±",
      value: () => console.log("Todo ±"),
      class: "calculator--action--internal",
    },
    {
      symbol: "0",
      value: "0",
      class: "calculator--action--internal",
    },
    {
      symbol: ".",
      value: () => console.log("Todo ."),
      class: "calculator--action--internal",
    },
    {
      symbol: "=",
      value: () => console.log("Todo ="),
      class: "calculator--action--equals",
    },
  ],
];

export default function Calculator() {
  const value = useSelector(selectValue);
  const [current, setCurrent] = useState(value);
  const dispatch = useDispatch();

  return (
    <div className="CalculatorWrapper">
      <input
        type="number"
        className="calculator--input"
        value={current}
        onChange={(event) => {
          setCurrent(event.target.value);
        }}
      />
      {buttonRows.map((row, index) => {
        return (
          <div className="calculator--actions--row" key={index}>
            {row.map((button, index) => {
              return <CalculatorButton button={button} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
