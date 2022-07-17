import React from "react";
import { subscribe } from "../redux/redux";
//import "./CounterBoard.css";
import { useSelector } from 'react-redux'
import { useContext } from "react";
import { TestContext } from "../../App";

/* 
  Uni-directional data flow: only from parent to child, easier to trace bug, maintainable, decoupling
  state lifting(props drilling): drawback
*/
const CounterBoard = () =>{

    // const [counter, setCounter] = useState(getState());
    // useEffect = () => {
      
    // }

    const {testCounter} = useContext(TestContext);

    const counter = useSelector(state=>state.counter);
    const arr = useSelector(state=>state.nested.nestedArr);

    return (
      <div className="counter-board">
        this is counter board
        <div>{counter}</div>
        <h5>test counter: </h5>
        <div>{testCounter}</div>
      </div>
    );
};

export default CounterBoard;