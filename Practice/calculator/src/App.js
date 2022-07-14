import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Keypad from "./components/Keypad/Keypad";
import Display from "./components/Display/Display";
import React, { useState, useEffect } from "react";

Array.prototype.peek = function () {
  if (this.length === 0) {
    throw new Error("out of bounds");
  }
  return this[this.length - 1];
};

function App() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState("");
  const [end, setEnd] = useState(false);
  const [valueStack, setvalueStack] = useState([]);
  const [operatorStack, setoperatorStack] = useState([]);
  const [isOperator, setIsoperator] = useState(false);
  const [isNum, setIsnum] = useState(true);

  const getOrder = (char) => {
    if (char === "x" || char === "/") return 1;
    else if (char === "+" || char === "-") return 2;
    else return 0;
  };

  const processOperator = (operator) => {
    console.log("In process operator");
    let a, b;
    let c;
    if (valueStack.length === 0) {
      console.log("Error");
      setEnd(true);
      return;
    } else {
      b = parseInt(valueStack.peek());
      valueStack.pop();
    }

    if (valueStack.length === 0) {
      console.log("Error");
      setEnd(true);
      return;
    } else {
      a = parseInt(valueStack.peek());
      valueStack.pop();
    }

    console.log("a ", a, " b ", b);
    switch (operator) {
      case "+":
        c = a + b;
        break;
      case "-":
        c = a - b;
        break;
      case "x":
        c = b * a;
        break;
      case "/":
        c = a / b;
        break;
    }

    // valueStack.push(temp);
    setvalueStack(valueStack.push(c));
    console.log("c ", c, " value stack ", valueStack);
  };

  const compute = () => {
    //let text = "7+8-11+9/7";
    //let text = "1+2*3-4/2";
    //let text = "1+4/2+3";
    let text = "1+2";

    console.log("text ", text);
    //let text = "1+3+9";
    var temp;

    for (let i = 0; i < text.length; i++) {
      temp = "";
      var flag = false;
      var j = i;
      while (flag === false) {
        if (isNaN(text[j]) && text[j] !== ".") {
          setvalueStack(valueStack.push(temp));
          //operator.push(text[j]);
          // if (
          //   operatorStack.length === 0 ||
          //   getOrder(text[j]) > getOrder(operatorStack.peek())
          // )
          if (
            operatorStack.length === 0 ||
            getOrder(text[j]) > getOrder(operatorStack.peek())
          ) {
            console.log("in the if ");
            setoperatorStack(operatorStack.push(text[j]));
          }
          // } else {
          //   //console.log("in the else ");
          //   // console.log(
          //   //   "getOrder(text[j]) <= getOrder(operatorStack.peek()",

          //   //   getOrder(text[j]) > getOrder(operatorStack.peek()),
          //   //   " j",
          //   //   j
          //   // );

          //   while (
          //     operatorStack.length !== 0 &&
          //     getOrder(text[j]) <= getOrder(operatorStack.peek())
          //   ) {
          //     // var flag_1 = true;
          //     // while (flag_1 === true)
          //     console.log("In the while loop!!!!!");
          //     console.log("operator ", operatorStack, " value ", valueStack);
          //     var a = operatorStack.peek();
          //     setoperatorStack(operatorStack.pop());
          //     processOperator(a);

          //     //flag_1 = false;
          //   }
          //   //console.log("after while");
          //   setoperatorStack(operatorStack.push(text[j]));
          // }

          if (
            operatorStack.length !== 0 &&
            getOrder(text[j]) <= getOrder(operatorStack.peek())
          ) {
            console.log("In the while loop!!!!!");
          }
          i = j;
          flag = true;
        } else {
          temp = temp + text[j];
          j = j + 1;
        }
      }
    }

    console.log(
      "Before In compute operator ",
      operatorStack,
      "stack ",
      valueStack
    );

    while (
      operatorStack.length !== 0 &&
      isNaN(operatorStack.peek()) &&
      valueStack.length !== 1
    ) {
      var top = operatorStack.peek();
      setoperatorStack(operatorStack.pop());
      console.log("In another while ");
      processOperator(top);
    }

    if (end === false) {
      let result = valueStack.peek();
      setvalueStack(valueStack.pop());
      if (operatorStack.length === 0 && valueStack.length === 0) {
        console.log("error in length");
      } else {
        console.log("The result is ", result);
      }
    }

    console.log("In compute operator ", operatorStack, "stack ", valueStack);

    //console.log("In compute trying stack ", stack, "operator ", operator);
  };

  // let a = parseInt(valueStack.pop());
  // let b = parseInt(valueStack.pop());
  //let operator = operatorStack.pop();

  const handleNumber = (e) => {
    //var a = e.target.innerHTML;
    setDisplay(display + e.target.innerHTML);
    setInput(input + e.target.innerHTML);
  };

  const handleOperator = (e) => {
    //setoperatorStack(operatorStack.push(e.target.innerHTML));
    setDisplay(display + e.target.innerHTML);
    setInput(input + e.target.innerHTML);
  };

  const handleEqual = (e) => {
    //setInput(input + e.target.innerHTML);
    //console.log(input);
    setDisplay(display + e.target.innerHTML);

    compute();
  };

  return (
    <Provider store={store}>
      <Display display={display} />
      <Keypad
        handleNumber={handleNumber}
        handleEqual={handleEqual}
        handleOperator={handleOperator}
      />
    </Provider>
  );
}

export default App;
