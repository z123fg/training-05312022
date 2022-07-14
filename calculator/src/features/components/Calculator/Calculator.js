import React from "react";
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

export default function Calculator() {
  const value = useSelector(selectValue);
  const dispatch = useDispatch();

  return (
    <div className="CalculatorWrapper">
      <input
        className="calculator--input"
        value={value}
        onChange={() => {
          console.log("TODO onChange");
        }}
      />
      <div className="calculator--actions--row">
        <span className="calculator--action--external" id="%">
          %
        </span>
        <span className="calculator--action--external" id="CE">
          CE
        </span>
        <span className="calculator--action--external" id="C">
          C
        </span>
        <span className="calculator--action--external" id="backspace">
          🡄
        </span>
      </div>
      <div className="calculator--actions--row">
        <span className="calculator--action--external" id="1/x">
          1/x
        </span>
        <span className="calculator--action--external" id="x²">
          x²
        </span>
        <span className="calculator--action--external" id="√">
          √
        </span>
        <span className="calculator--action--external" id="/">
          /
        </span>
      </div>
      <div className="calculator--actions--row">
        <span className="calculator--action--internal" id="7">
          7
        </span>
        <span className="calculator--action--internal" id="8">
          8
        </span>
        <span className="calculator--action--internal" id="9">
          9
        </span>
        <span className="calculator--action--external" id="X">
          X
        </span>
      </div>
      <div className="calculator--actions--row">
        <span className="calculator--action--internal" id="4">
          4
        </span>
        <span className="calculator--action--internal" id="5">
          5
        </span>
        <span className="calculator--action--internal" id="6">
          6
        </span>
        <span className="calculator--action--external" id="-">
          -
        </span>
      </div>
      <div className="calculator--actions--row">
        <span className="calculator--action--internal" id="1">
          1
        </span>
        <span className="calculator--action--internal" id="2">
          2
        </span>
        <span className="calculator--action--internal" id="3">
          3
        </span>
        <span className="calculator--action--external" id="+">
          +
        </span>
      </div>
      <div className="calculator--actions--row">
        <span className="calculator--action--internal" id="+/-">
        ±
        </span>
        <span className="calculator--action--internal" id="0">
          0
        </span>
        <span className="calculator--action--internal" id=".">
          .
        </span>
        <span className="calculator--action--equals" id="=">
          =
        </span>
      </div>
    </div>
  );
}
