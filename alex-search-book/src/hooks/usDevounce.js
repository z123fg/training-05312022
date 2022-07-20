import { useState, useRef } from "react";
const useDebounce = (callback, timeout) => {
    const timeoutRef = useRef(null);
    const [isReady, setIsReady] = useState(true);
    const debuncedAction = () => {
        if (!isReady) {
            clearTimeout(timeoutRef.current);
        }
        setIsReady(false);
        timeoutRef.current = setTimeout(() => {
            setIsReady(true);
            callback()
            console.log("new request!");
        }, timeout);
    };

    return debuncedAction;
}

export default useDebounce;