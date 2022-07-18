import { useState, useRef } from "react";

const useDebounce = (callback, timeout) => {
  const timeoutRef = useRef(null);
  const [isReady, setIsReady] = useState(true);
  const debouncedAction = () => {
    if (!isReady) {
      clearTimeout(timeoutRef.current);
    }
    setIsReady(false);
    timeoutRef.current = setTimeout(() => {
      setIsReady(true);
      callback()
    }, timeout);
  };

  return  debouncedAction;
};

export default useDebounce
