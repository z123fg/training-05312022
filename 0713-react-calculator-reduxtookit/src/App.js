import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addText, calculateResult, clear, deletePrevText } from './redux/calculatorSlice';
 
function App() {
  const text = useSelector(state=>state.calculator.text);
  const result = useSelector(state=>state.calculator.result);
  const dispatch = useDispatch();
 
  const handleAddTextClick = (e) => {
       dispatch(addText(e.target.name));
  }

  const handleResult = () => {
    dispatch(calculateResult());
  }

  const clearAll = () => {
    dispatch(clear())
  }

  const deleteLast = () => {
    dispatch(deletePrevText())
  }
 
  return (
    <div className="calculator-conatainer">
      <div className="calculator-output">
        <div className="previous-operand">{text}</div>
        <div className="current-operand">{result}</div>
      </div>
      <button onClick={clearAll} className="span-two">AC</button>
      <button onClick={deleteLast}>DEL</button>
      <button onClick={handleAddTextClick} value={text} name="/">÷</button>
      <button onClick={handleAddTextClick} value={text} name="1">1</button>
      <button onClick={handleAddTextClick} value={text} name="2">2</button>
      <button onClick={handleAddTextClick} value={text} name="3">3</button>
      <button onClick={handleAddTextClick} value={text} name="*">*</button>
      <button onClick={handleAddTextClick} value={text} name="4">4</button>
      <button onClick={handleAddTextClick} value={text} name="5">5</button>
      <button onClick={handleAddTextClick} value={text} name="6">6</button>
      <button onClick={handleAddTextClick} value={text} name="+">+</button>
      <button onClick={handleAddTextClick} value={text} name="7">7</button>
      <button onClick={handleAddTextClick} value={text} name="8">8</button>
      <button onClick={handleAddTextClick} value={text} name="9">9</button>
      <button onClick={handleAddTextClick} value={text} name="-">-</button>
      <button onClick={handleAddTextClick} value={text} name=".">.</button>
      <button onClick={handleAddTextClick} value={text} name="0">0</button>
      <button onClick={handleResult} className="span-two">=</button>
    </div>
  );
}
 
export default App;
