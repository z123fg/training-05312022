import { configureStore } from "@reduxjs/toolkit";
import userinputReducer from "./slices/userinputReducer";

export const store = configureStore({
  reducer: {
    userinput: userinputReducer,
  },
  //   middleware: (getDefaultMiddleware) => {
  //     console.log("defaultMiddleware", getDefaultMiddleware());
  //     return getDefaultMiddleware();
  //   },
});
