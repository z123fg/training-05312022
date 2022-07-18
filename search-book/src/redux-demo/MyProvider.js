import { createContext, useEffect, useState } from "react"





export const MyReduxContext = createContext(null);


const MyProvider = ({children, store}) => {
  const {getState, subscribe, dispatch} = store;
  //useState
  const [state, setState] = useState(getState());
  //useReducer

  useEffect(()=>{
    subscribe(()=>{
      setState(getState());
    })
  },[])

  return (
    <MyReduxContext.Provider value={{state, dispatch}}>
      {children}
    </MyReduxContext.Provider>
  )
}

export default MyProvider