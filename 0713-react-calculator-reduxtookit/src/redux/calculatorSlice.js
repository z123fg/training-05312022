import { createSlice } from '@reduxjs/toolkit';
import * as math from "mathjs";
 
const initialState = {
  text: "",
  result: "",
};
 
const operations = ["/", "*", "+", "-", "."];

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addText: (state, action) => {
      if (action.payload === "0" && state.text === "0") return;
      if (action.payload === "." && state.text.includes(".")) return;
      if (operations.includes(action.payload) && operations.includes(state.text.slice(-1))) return;

      return {
        text: `${state.text || ""}${action.payload}`,
      }
    },
    calculateResult: (state, action) => {
      const input = state.text
      return {
        result: math.evaluate(input)
      }
    }, 
    clear: (state, action) => {
      return {
        text: "",
        result: "",
      }
    }, 
    deletePrevText: (state, action) => {
      return {
        text: state.text.slice(0, -1)
      }

    }

    
  }   
})


 
const calculatorReducer = calculatorSlice.reducer;
export default calculatorReducer;
 
export const { addText, calculateResult, clear, deletePrevText } = calculatorSlice.actions;
