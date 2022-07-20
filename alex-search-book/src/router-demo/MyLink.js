import { useContext } from "react";
import { MyRouterContext } from "./MyBrowserRouter";

const MyLink = ({children, to}) => {
    const myRouterContext = useContext(MyRouterContext);
    const {forceUpdate} = myRouterContext;

    const handleClick = (e) => {
        console.log("MyLink");
        e.preventDefault();
        window.history.pushState({}, null, to);
        forceUpdate();
    }

    return <a href="" onClick={handleClick}>{children}</a>
}

export default MyLink;