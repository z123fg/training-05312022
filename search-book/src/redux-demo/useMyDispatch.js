import { useContext } from "react"
import { MyReduxContext } from "./MyProvider"



const useMyDispatch = () => {
  const myReduxContext = useContext(MyReduxContext);
  const {dispatch} = myReduxContext
  return dispatch
}

export default useMyDispatch;