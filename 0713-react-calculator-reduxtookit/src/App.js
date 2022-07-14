import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addDigit, clearDigit, chooseOperation, evaluateResult } from './redux/calculatorSlice';
 
function App() {
  const currentOperand = useSelector(state=>state.calculator.currentOperand);
  const previousOperand = useSelector(state=>state.calculator.previousOperand);
  const operation = useSelector(state=>state.calculator.operation);
  const state = useSelector(state=>state.calculator);
  const dispatch = useDispatch();
 
  const handleDigitClick = (e) => {
       dispatch(addDigit(e.target.name));
  }
 
  const handleClearClick = () => {
    dispatch(clearDigit())
  }
 
  const handleOperationClick = (e) => {
    dispatch(chooseOperation(e.target.name));
}

const handleResult = () => {
  console.log(state)
  dispatch(evaluateResult())
}
 
  return (
    <div className="calculator-conatainer">
      <div className="calculator-output">
        <div className="previous-operand">{previousOperand}{operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={handleClearClick}>AC</button>
      <button >DEL</button>
      <button onClick={handleOperationClick} value={operation} name="/">÷</button>
      <button onClick={handleDigitClick} value={currentOperand} name="1">1</button>
      <button onClick={handleDigitClick} value={currentOperand} name="2">2</button>
      <button onClick={handleDigitClick} value={currentOperand} name="3">3</button>
      <button onClick={handleOperationClick} value={operation} name="*">*</button>
      <button onClick={handleDigitClick} value={currentOperand} name="4">4</button>
      <button onClick={handleDigitClick} value={currentOperand} name="5">5</button>
      <button onClick={handleDigitClick} value={currentOperand} name="6">6</button>
      <button onClick={handleOperationClick} value={operation} name="+">+</button>
      <button onClick={handleDigitClick} value={currentOperand} name="7">7</button>
      <button onClick={handleDigitClick} value={currentOperand} name="8">8</button>
      <button onClick={handleDigitClick} value={currentOperand} name="9">9</button>
      <button onClick={handleOperationClick} value={operation} name="-">-</button>
      <button onClick={handleDigitClick} value={currentOperand} name=".">.</button>
      <button onClick={handleDigitClick} value={currentOperand} name="0">0</button>
      <button onClick={handleResult} className="span-two">=</button>
    </div>
  );
}
 
export default App;
