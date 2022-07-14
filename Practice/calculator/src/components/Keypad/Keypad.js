import "./keypad.css";

const Keypad = ({ handleNumber, handleEqual, handleOperator }) => {
  return (
    <div className="grid-container">
      <button className="grid-item" onClick={handleNumber}>
        1
      </button>
      <button className="grid-item" onClick={handleNumber}>
        2
      </button>
      <button className="grid-item" onClick={handleNumber}>
        3
      </button>
      <button className="grid-item" onClick={handleNumber}>
        4
      </button>
      <button className="grid-item" onClick={handleNumber}>
        5
      </button>
      <button className="grid-item" onClick={handleNumber}>
        6
      </button>
      <button className="grid-item" onClick={handleNumber}>
        7
      </button>
      <button className="grid-item" onClick={handleNumber}>
        8
      </button>
      <button className="grid-item" onClick={handleNumber}>
        9
      </button>
      <button className="grid-item" onClick={handleNumber}>
        0
      </button>
      <button className="grid-item" onClick={handleOperator}>
        +
      </button>
      <button className="grid-item" onClick={handleOperator}>
        -
      </button>
      <button className="grid-item" onClick={handleOperator}>
        x
      </button>
      <button className="grid-item" onClick={handleOperator}>
        /
      </button>
      <button className="grid-item" onClick={handleEqual}>
        =
      </button>
    </div>
  );
};

export default Keypad;
