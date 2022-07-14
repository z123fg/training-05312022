import { OPERATIONS } from "../operations";

const Control = (props) => {
  const {
    handleNumberClick,
    handleOperationClick,
    handleEqualClick
  } = props;

  // const handleClick = (e) => {
  //   const action = e.target.innerText;
  //   switch(action) {
  //     case '1':
  //     case '2':
  //     case '3':
  //     case '4':
  //     case '5':
  //     case '6':
  //     case '7':
  //     case '8':
  //     case '9':
  //       setCurrentNumber(Number(currentNumber) === 0 ? action : `${currentNumber}${action}`);
  //       break;
  //     case '+/-':
  //       setCurrentNumber(String(-Number(currentNumber)));
  //       break;
  //     case '0':
  //       if (Number(currentNumber) !== 0 ||
  //         (Number(currentNumber) === 0 && currentNumber.includes('.'))) {
  //         setCurrentNumber(`${currentNumber}${action}`)
  //       }
  //       break;
  //     case '.':
  //       if (!currentNumber.includes('.')) {
  //         setCurrentNumber(`${currentNumber}${action}`);
  //       }
  //       break;
  //     case OPERATIONS.ADD:
  //     case OPERATIONS.SUBTRACT:
  //     case OPERATIONS.MULTIPLY:
  //     case OPERATIONS.DIVIDE:
  //       setOperation(action);  
  //       if (equalClicked) {
  //         setPreviousNumber1(currentNumber);
  //       } else {
  //         if (recordTarget === 1) {
  //           setPreviousNumber1(currentNumber);
  //           setRecordTarget(2);
  //         } else {
  //           const result = calculate();
  //           if (result) {
  //             setPreviousNumber1(String(result));
  //           }
  //         }
  //       }
  //       break;
  //     case 'C':
  //       setOperation(null);
  //       setPreviousNumber1(null);
  //       setPreviousNumber2(null);
  //       setCurrentNumber('0');
  //       break;
  //     case 'Del':
  //       const newNumber = Number(currentNumber.slice(0, -1));
  //       if (Number.isNaN(newNumber)) {
  //         setCurrentNumber('0');
  //       } else {
  //         setCurrentNumber(String(newNumber));
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <div className="control">
      <div className="control-row">
        <div className="control-row__button" />
        <div className="control-row__button button--operation" onClick={handleOperationClick}>C</div>
        <div className="control-row__button button--operation" onClick={handleOperationClick}>Del</div>
        <div className="control-row__button button--operation" onClick={handleOperationClick}>÷</div>
      </div>
      <div className="control-row">
        <div className="control-row__button button--number" onClick={handleNumberClick}>7</div>
        <div className="control-row__button button--number" onClick={handleNumberClick}>8</div>
        <div className="control-row__button button--number" onClick={handleNumberClick}>9</div>
        <div className="control-row__button button--operation" onClick={handleOperationClick}>×</div>
      </div>
      <div className="control-row">
        <div className="control-row__button button--number" onClick={handleNumberClick}>4</div>
        <div className="control-row__button button--number" onClick={handleNumberClick}>5</div>
        <div className="control-row__button button--number" onClick={handleNumberClick}>6</div>
        <div className="control-row__button button--operation" onClick={handleOperationClick}>-</div>
      </div>
      <div className="control-row">
        <div className="control-row__button button--number" onClick={handleNumberClick}>1</div>
        <div className="control-row__button button--number" onClick={handleNumberClick}>2</div>
        <div className="control-row__button button--number" onClick={handleNumberClick}>3</div>
        <div className="control-row__button button--operation" onClick={handleOperationClick}>+</div>
      </div>
      <div className="control-row">
        <div className="control-row__button button--number" onClick={handleNumberClick}>+/-</div>
        <div className="control-row__button button--number" onClick={handleNumberClick}>0</div>
        <div className="control-row__button button--number" onClick={handleNumberClick}>.</div>
        <div className="control-row__button button--equal" onClick={handleEqualClick}>=</div>
      </div>
    </div>
  );
};

export default Control;