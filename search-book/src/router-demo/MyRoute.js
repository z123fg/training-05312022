import { useContext } from "react";
import { MyRouterContext } from "./MyBrowserRouter";


const MyRoute = ({path, element}) =>{
  const myRouterContext = useContext(MyRouterContext);
    const {state} = myRouterContext;


  const currentPathname = window.location.pathname
  console.log("currentPathname", currentPathname);




  if(currentPathname === path){
    return element
  }

  return null;
}

export default MyRoute;