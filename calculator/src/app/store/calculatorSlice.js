import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value += action.payload;
    },
    subtract: (state, action) => {
      state.value -= action.payload;
    },
    multiply: (state, action) => {
      state.value *= action.payload;
    },
    divide: (state, action) => {
      state.value /= action.payload;
    },
    square: (state, action) => {
      state.value *= state.value;
    },
    squareRoot: (state, action) => {
      state.value /= state.value;
    }
  },
});

export const { add, subtract, multiply, divide, square, squareRoot } = calculatorSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectValue = (state) => state.calculator.value;

export default calculatorSlice.reducer;
