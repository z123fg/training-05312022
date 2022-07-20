import { createContext, useState } from "react";

export const MyRouterContext = createContext(null);

const MyBrowserRouter = ({children}) => {
    const [state, setState] = useState();
    const forceUpdate = () => setState({});

    return(
        <MyRouterContext.Provider value={{state,forceUpdate}}>
            {children}
        </MyRouterContext.Provider>
    )
}

export default MyBrowserRouter;