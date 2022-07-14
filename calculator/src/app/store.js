import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './store/calculatorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
