import React from "react";
import { useReducer } from "react";
import Operands from "./Operands";
import Operators from "./Operators";
import "./styles.css";

export const ACTIONS = {
  ADD_INT: "add-integer",
  CLR: "clear",
  OPERATION_CHOICE: "operation-choice",
  EVAL: "eval",
  TO_PERCENT: "percentage-integer",
  TO_NEGATIVE: "negative-integer",
};

const calcReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_INT:
      if (payload.int === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.int === "." && state.currentOperand.includes(".")) {
        return state;
      }
      // add condition for decimal while currentOperand is undefined.

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.int}`,
      };
    case ACTIONS.CLR:
      return {};
    case ACTIONS.OPERATION_CHOICE:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.EVAL:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
    case ACTIONS.TO_PERCENT:
      if (state.currentOperand == null) {
        return state;
      }

      return {
        currentOperand: toPercentage(state),
      };
    case ACTIONS.TO_NEGATIVE:
      if (state.currentOperand == null) {
        return state;
      }

      return {
        currentOperand: toNegative(state),
      }
  }
};

const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const prevToNum = parseFloat(previousOperand);
  const currentToNum = parseFloat(currentOperand);

  if (isNaN(prevToNum) || isNaN(currentToNum)) {
    return "";
  }
  let calculation = "";

  switch (operation) {
    case "/":
      calculation = prevToNum / currentToNum;
      break;
    case "*":
      calculation = prevToNum * currentToNum;
      break;
    case "-":
      calculation = prevToNum - currentToNum;
      break;
    case "+":
      calculation = prevToNum + currentToNum;
      break;
  }

  return calculation.toString();
};

const toPercentage = ({ currentOperand }) => {
  const currentToNum = parseFloat(currentOperand);

  if (isNaN(currentToNum)) {
    return "";
  }

  let calculation = "";
  calculation = currentToNum / 100;

  return calculation.toString();
};

const toNegative = ({ currentOperand }) => {
  const currentToNum = parseFloat(currentOperand);
  if (isNaN(currentToNum)) {
    return ""
  }

  let calculation = "";
  calculation = currentToNum * -1;

  return calculation.toString();
}

const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    calcReducer,
    {}
  );
  console.log(currentOperand);
  const operands = [
    {
      int: ".",
    },
    {
      int: "0",
    },
    {
      int: "1",
    },
    {
      int: "2",
    },
    {
      int: "3",
    },
    {
      int: "4",
    },
    {
      int: "5",
    },
    {
      int: "6",
    },
    {
      int: "7",
    },
    {
      int: "8",
    },
    {
      int: "9",
    },
  ];
  const operators = [
    {
      operation: "/",
    },
    {
      operation: "*",
    },
    {
      operation: "-",
    },
    {
      operation: "+",
    },
  ];

  return (
    <div className="calculator__container">
      <div className="textbox__container">
        <p>
          {previousOperand} {operation}
        </p>
        <h1>{currentOperand}</h1>
      </div>

      <div className="buttonbox__wrapper">
        <button onClick={() => dispatch({ type: ACTIONS.CLR })}>AC</button>

        <button onClick={() => dispatch({ type: ACTIONS.TO_NEGATIVE })}>
          + / -
        </button>

        <button onClick={() => dispatch({ type: ACTIONS.TO_PERCENT })}>
          %
        </button>

        {operators.map(({ operation }) => (
          <Operators
            key={`${operation}-btn`}
            operation={operation}
            dispatch={dispatch}
          />
        ))}

        <button onClick={() => dispatch({ type: ACTIONS.EVAL })}>=</button>

        {operands.map(({ int }) => (
          <Operands key={`${int}-btn`} int={int} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};
export default App;
