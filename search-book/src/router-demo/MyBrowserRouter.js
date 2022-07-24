import { createContext, useState } from "react"


export const MyRouterContext = createContext(null);


/* 
    1. click the Link, history.pushState, forceUpdate, 
    2. Route, receives the updated state from context, match the path with location.pathname, conditionally render the children;

    1. click back and forward button from the browser
    2. Routes: trigger onpopstate event, forceUpdate
    3. Route: match the path with location.pathname, conditionally render the children
 */
const MyBrowserRouter = ({children}) => {
  const [state, setState] = useState();
  const forceUpdate = () => setState({});

  return (
    <MyRouterContext.Provider value={{state,forceUpdate}}>
      {children}
    </MyRouterContext.Provider>
  )
}

export default MyBrowserRouter;