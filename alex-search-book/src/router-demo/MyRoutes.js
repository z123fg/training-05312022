import { useContext, useEffect } from "react";
import { MyRouterContext } from "./MyBrowserRouter";

const MyRoutes = ({children}) => {
    const myRouterContext = userContext(MyRouterContext);
    const {forceUpdate} = myRouterContext;

    useEffect(() => {
        const handlePopState = () => {
            forceUpdate();
        }
        window.onpopstate = handlePopState;
        return () => {
            window.removeEventListener("popstate", handlePopState);
        }
    }, [])

    return(
        <>
            {children}
        </>
    )
}

export default MyRoutes;