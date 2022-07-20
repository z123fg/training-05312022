import { useContext } from "react";
import { MyReduxContext } from "./MyProvider";


const useMySelector = (callback) =>{
  const myReduxContext = useContext(MyReduxContext);
  const {state} = myReduxContext;
  return callback(state);
}

export default useMySelector;