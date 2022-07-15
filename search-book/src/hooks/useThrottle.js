import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

const useThrottle = (callback, timeout) => {
  const [isReady, setIsReady] = useState(true);
  const throttledAction = () => {
    if (isReady) {
      callback();
      setIsReady(false);
      setTimeout(() => {
        setIsReady(true);
      }, timeout);
    }
  };

  return throttledAction;
};

export default useThrottle;
