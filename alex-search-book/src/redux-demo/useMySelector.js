import { useContext } from "react";
import { MyReduxContext } from "./MyProvide";

const useMySelector= (callback) => {
    const myReduxContext = useContext(MyReduxContext);
    const {state} = myReduxContext;
    return callback(state);
}

export default useMySelector;