const ResultDisplay = (props) => {
  const {
    currentNumber,
    operation,
    previousNumber1,
    previousNumber2,
    result,
  } = props;
  
  return (
    <div className="result-display">
      <div className={`result-display__previous ${previousNumber1 === null || operation === null ? 'result-display__previous--hidden' : ''}`}>
        {result !== null ?
          `${previousNumber1} ${operation} ${previousNumber2} =` :
          `${previousNumber1} ${operation}`  
        }
      </div>
      <div className="result-display__main">
        {currentNumber}
      </div>
    </div>
  );
};

export default ResultDisplay;