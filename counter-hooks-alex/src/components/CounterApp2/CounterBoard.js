import React from "react";

/* 
  Uni-directional data flow: only from parent to child, easier to trace bug, maintainable, decoupling
  state lifting(props drilling): drawback
*/
const CounterBoard = ({counter}) =>{

    const [counter, setCounter] = useState(getState());
    useEffect = () => {
      
    }

    return (
      <div>{counter}</div>
    )
}

export default CounterBoard;