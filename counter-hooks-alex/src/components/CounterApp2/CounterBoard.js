import React from "react";
import { subscribe } from "../redux/redux";

/* 
  Uni-directional data flow: only from parent to child, easier to trace bug, maintainable, decoupling
  state lifting(props drilling): drawback
*/
const CounterBoard = ({counter}) =>{

    const [counter, setCounter] = useState(getState());
    useEffect = () => {
      
    }

    const {testCounter} = useContext(TestContext);

    const counter = useSelector(state=>state.counter);
    const arr = useSelector(state=>state.nested.nestedArr);

    return (
      <div>{counter}</div>
    )
}

export default CounterBoard;