import './App.css';
import React, { useState } from 'react';

function App() {
  const [ calc, setCalc ] = useState("");
  const [ result, setResult ] = useState("");

  const operations = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (operations.includes(value) && calc === "") return;
    if (operations.includes(value) && operations.includes(calc.slice(-1))) return;
    setCalc(calc + value)
  } 

  const calculate = () => {
    let compuation = eval(calc).toString(); 
    setCalc(compuation);
    setResult(compuation);
  }

  const deleteLast = () => {
    if(calc === ""){
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  const clear = () => {
    setCalc("")
    setResult("")
  }

  return (
    <div className="calculator-conatainer">
      <div className="calculator-output">
        <div className="previous-operand">{result}</div>
        <div className="current-operand">{ calc || "0"}</div>
      </div>
      <button className="span-two" onClick={clear}>AC</button>
      <button onClick={deleteLast}>DEL</button>
      <button onClick={() => updateCalc("/")}>÷</button>
      <button onClick={() => updateCalc("1")}>1</button>
      <button onClick={() => updateCalc("2")}>2</button>
      <button onClick={() => updateCalc("3")}>3</button>
      <button onClick={() => updateCalc("*")}>*</button>
      <button onClick={() => updateCalc("4")}>4</button>
      <button onClick={() => updateCalc("5")}>5</button>
      <button onClick={() => updateCalc("6")}>6</button>
      <button onClick={() => updateCalc("+")}>+</button>
      <button onClick={() => updateCalc("7")}>7</button>
      <button onClick={() => updateCalc("8")}>8</button>
      <button onClick={() => updateCalc("9")}>9</button>
      <button onClick={() => updateCalc("-")}>-</button>
      <button onClick={() => updateCalc(".")}>.</button>
      <button onClick={() => updateCalc("0")}>0</button>
      <button onClick={calculate} className="span-two">=</button>
    </div>
  );
}

export default App;
