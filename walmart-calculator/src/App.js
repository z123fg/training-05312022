import { useEffect, useState } from 'react';
import ResultDisplay from './components/ResultDisplay';
import Control from './components/Control';
import { OPERATIONS } from './operations';
import './App.css';

function App() {
  const [previousNumber1, setPreviousNumber1] = useState(null);
  const [previousNumber2, setPreviousNumber2] = useState(null);
  const [currentNumber, setCurrentNumber] = useState('0');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState(null);
  const [shouldReplace, setShouldReplace] = useState(false);

  useEffect(() => {
    const result = calculate();
    setResult(result);
    if (result !== null) {
      setCurrentNumber(String(result));
    }
  }, [previousNumber1, previousNumber2]);

  const calculate = () => {
    if (previousNumber1 !== null &&
      operation !== null &&
      previousNumber2 !== null) {
      switch(operation) {
        case OPERATIONS.ADD:
          return Number(previousNumber1) + Number(previousNumber2);
        case OPERATIONS.SUBTRACT:
          return Number(previousNumber1) - Number(previousNumber2);
        case OPERATIONS.MULTIPLY:
          return Number(previousNumber1) * Number(previousNumber2);
        case OPERATIONS.DIVIDE:
          return Number(previousNumber1) / Number(previousNumber2);
        default:
          break;
      }
    }
    return null;
  };

  const calculateWithParams = (num1, num2, operation) => {
    switch(operation) {
      case OPERATIONS.ADD:
        return Number(num1) + Number(num2);
      case OPERATIONS.SUBTRACT:
        return Number(num1) - Number(num2);
      case OPERATIONS.MULTIPLY:
        return Number(num1) * Number(num2);
      case OPERATIONS.DIVIDE:
        return Number(num1) / Number(num2);
      default:
        return null;
    }
  };
  
  const clearEquation = () => {
    setPreviousNumber1(null);
    setPreviousNumber2(null);
    setResult(null);
    setOperation(null);
  };

  const handleNumberClick = (e) => {
    if (result !== null) {
      clearEquation();
    }
    const action = e.target.innerText;
    switch(action) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (shouldReplace) {
          setCurrentNumber(action);
          setShouldReplace(false);
        } else {
          const numberIsPureZero = currentNumber === '0';
          setCurrentNumber(numberIsPureZero ? action : `${currentNumber}${action}`);
        }
        break;
      case '+/-':
        setCurrentNumber(String(-Number(currentNumber)));
        break;
      case '0':
        if (shouldReplace) {
          setCurrentNumber(action);
          setShouldReplace(false);
        } else {
          if (Number(currentNumber) !== 0 ||
            (Number(currentNumber) === 0 && currentNumber.includes('.'))) {
            setCurrentNumber(`${currentNumber}${action}`)
          }
        }
        break;
      case '.':
        if (shouldReplace) {
          setCurrentNumber('0.');
          setShouldReplace(false);
        } else {
          if (!currentNumber.includes('.')) {
            setCurrentNumber(`${currentNumber}${action}`);
          }
        }
        break;
      default:
        break;
    }
  };

  const handleOperationClick = (e) => {
    if (result !== null) {
      clearEquation();
    }
    const action = e.target.innerText;
    switch(action) {
      case OPERATIONS.ADD:
      case OPERATIONS.SUBTRACT:
      case OPERATIONS.MULTIPLY:
      case OPERATIONS.DIVIDE:
        setOperation(action);
        if (previousNumber1 === null) {
          setPreviousNumber1(currentNumber);
          setShouldReplace(true);
        } else {
          if (operation !== null) {
            const tempResult = previousNumber2 !== null ?
              calculate() :
              calculateWithParams(Number(previousNumber1), Number(currentNumber), operation);
            setPreviousNumber1(tempResult);
            setPreviousNumber2(null);
            setResult(null);
            setCurrentNumber(String(tempResult));
            setShouldReplace(true);
          } else {
            setPreviousNumber1(currentNumber);
            setShouldReplace(true);
          }
        }
        break;
      case 'C':
        setOperation(null);
        setPreviousNumber1(null);
        setPreviousNumber2(null);
        setCurrentNumber('0');
        setResult(null);
        break;
      case 'Del':
        if (result !== null) {
          clearEquation();
        } else {
          const newNumber = currentNumber.slice(0, -1);
          if (newNumber.length > 0) {
            setCurrentNumber(newNumber);
          } else {
            setCurrentNumber('0');
          }
        }
        break;
      default:
        break;
    }
  }
  
  const handleEqualClick = () => {
    if (previousNumber1 === null) {
      setPreviousNumber1(currentNumber);
    } else if (operation !== null) {
      if (previousNumber2 === null) {
        setPreviousNumber2(currentNumber);
        // setShouldReplace(true);
      } else {
        setPreviousNumber1(currentNumber);
        // setShouldReplace(true);
      }
    }
    setShouldReplace(true);
  };

  return (
    <div className="App">
      <ResultDisplay
        previousNumber1={previousNumber1}
        previousNumber2={previousNumber2}
        currentNumber={currentNumber}
        result={result}
        operation={operation}
      />
      <Control
        handleNumberClick={handleNumberClick}
        handleOperationClick={handleOperationClick}
        handleEqualClick={handleEqualClick}
      />
    </div>
  );
}

export default App;
