import React, { useState } from "react";

const calculatorObject = {
  currValue: [""],
  prevValue: [""],
  operator: "",
  result: 0
};

const Calculator = () => {
  const [calObj, setCalObj] = useState(calculatorObject);

  const handleNumberButton = (e) => {
    // check if operator exist => push into currValue
    if (calObj.operator === "") {
      setCalObj(prev => {return {...prev, prevValue: [...prev.prevValue, e]}})
    } else {
      setCalObj(prev => {return {...prev, currValue: [...prev.currValue, e]}})
    }
  };

  const performCalculation =(num1, num2, operator) => {
    let result;
    switch(operator){
        default:
            break;
        case "%":
            result = num1 % num2;
            break;
        case "÷":
            result = num1/num2;
            break;
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "X":
            result = num1*num2;
            break;
    }
    console.log("Num1: ", num1);
    console.log("Num2: ", num2);
    console.log("Result: ", result);
    return result.toFixed(2);
  }

  const handleOperatorButton = (e) => {
    // if there is operator input => return prevValue operator currValue into prevValue and clear currValue and update Result
    if(calObj.operator === ""){
        setCalObj(prev => {return{...prev, operator: e}})
    } else{
        setCalObj(prev => {
            let num1 = Number(prev.prevValue.join(''));
            let num2 = Number(prev.currValue.join(''));
            let result = performCalculation(num1,num2, prev.operator);
            return{...prev, operator: e, prevValue: ["", result], currValue: [""], result: result}
        })
    }
  };

  const handleEqualButton = () => {
    setCalObj(prev => {
        let num1 = Number(prev.prevValue.join(''));
        let num2 = Number(prev.currValue.join(''));
        let result = performCalculation(num1, num2, prev.operator)
        return{
            ...prev, result: result, prevValue: [""], currValue:[""], operator: ""
        }
    })
  };

  const handleClearButton = () => {
    setCalObj(calculatorObject);
  };

  const handleSignButton = () => {
    if (calObj.operator === "") {
        // if sign is declared
        if ((calObj.prevValue[0] === "") || (calObj.prevValue[0] === "-")){
            console.log("case 1: ");
            calObj.prevValue[0] === "" 
            ? setCalObj(prev => {return {...prev, prevValue: ["-", ...prev.prevValue.slice(1)]}})
            : setCalObj(prev => {return {...prev, prevValue: ["", ...prev.prevValue.slice(1)]}})
        } else {
            setCalObj(prev => {return {...prev, prevValue: ["-", ...prev.prevValue.slice(1)]}})
        }
    } else {
        if ((calObj.currValue[0] === "") || (calObj.currValue[0] === "-")){
            calObj.currValue[0] === "" 
            ? setCalObj(prev => {return {...prev, currValue: ["-", ...prev.currValue.slice(1)]}})
            : setCalObj(prev => {return {...prev, currValue: ["", ...prev.currValue.slice(1)]}})
        } else {
            setCalObj(prev => {return {...prev, currValue: ["-", ...prev.currValue.slice(1)]}})
        }
    }
  }

  const handleDecimal = () => {
    if(calObj.operator === ""){
        if (calObj.prevValue.indexOf(".") === -1){
            setCalObj(prev => {return {...prev, prevValue: [...prev.prevValue, "."]}})
        }
    } else {
        if (calObj.currValue.indexOf(".") === -1){
            setCalObj(prev => {return {...prev, currValue: [...prev.currValue, "."]}})
        }
    }
  }

  return (
    <div className="calculator__container">
      {/* display */}
      <div className="display__container">
        <span>{calObj.prevValue.join('')}{calObj.operator}{calObj.currValue.join('')}</span>
        <span>{calObj.result}</span>
      </div>
      {/* buttons */}
      <div className="buttons__container">
        {/* first row */}
        <div className="buttons__row">
          <button className="cal__button first__row" onClick={handleClearButton}>C</button>
          <button className="cal__button first__row" onClick={handleSignButton}>+/-</button>
          <button className="cal__button first__row" onClick={()=>handleOperatorButton("%")}>%</button>
          <button className="cal__button fourth__button" onClick={()=>handleOperatorButton("÷")}>÷</button>
        </div>
        {/* second row */}
        <div className="buttons__row">
          <button className="cal__button" onClick={()=>handleNumberButton(7)} value={7}>7</button>
          <button className="cal__button" onClick={()=>handleNumberButton(8)} value={8}>8</button>
          <button className="cal__button" onClick={()=>handleNumberButton(9)} value={9}>9</button>
          <button className="cal__button fourth__button" onClick={()=>handleOperatorButton("X")}>X</button>
        </div>
        {/* third row */}
        <div className="buttons__row">
          <button className="cal__button" onClick={()=>handleNumberButton(4)} value={4}>4</button>
          <button className="cal__button" onClick={()=>handleNumberButton(5)} value={5}>5</button>
          <button className="cal__button" onClick={()=>handleNumberButton(6)} value={6}>6</button>
          <button className="cal__button fourth__button" onClick={()=>handleOperatorButton("-")}>-</button>
        </div>
        {/* fourth row */}
        <div className="buttons__row">
          <button className="cal__button" onClick={()=>handleNumberButton(1)} value={1}>1</button>
          <button className="cal__button" onClick={()=>handleNumberButton(2)} value={2}>2</button>
          <button className="cal__button" onClick={()=>handleNumberButton(3)} value={3}>3</button>
          <button className="cal__button fourth__button" onClick={()=>handleOperatorButton("+")}>+</button>
        </div>
        {/* fifth row */}
        <div className="buttons__row">
          <button className="cal__button" style={{ width: "150px" }} onClick={()=>handleNumberButton(0)} value={0}>
            0
          </button>
          <button className="cal__button" onClick={handleDecimal}>.</button>
          <button className="cal__button fourth__button" onClick={handleEqualButton}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
