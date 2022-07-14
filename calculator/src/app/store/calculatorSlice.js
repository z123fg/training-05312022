import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  prevChar: "",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.prevChar !== action.payload) state.value += action.payload;
    },
    square: (state, action) => {
      state.value *= state.value;
    },
    squareRoot: (state, action) => {
      state.value = Math.sqrt(state.value);
    },
    backspace: (state, action) => {
      state.value = state.value.slice(0, -1);
    },
    clear: (state) => {
      state.value = "";
    },
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  add,
  subtract,
  multiply,
  divide,
  square,
  squareRoot,
  backspace,
  clear,
  set,
} = calculatorSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectValue = (state) => state.calculator.value;

export default calculatorSlice.reducer;
