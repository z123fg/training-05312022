import { createSlice } from '@reduxjs/toolkit';
 
const initialState = {
  currentOperand: "",
  previousOperand: "",
  operation: "",
  overwrite: true
};
 
const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addDigit: (state, action) => {
        if (state.overwrite) {
            return {
                currentOperand: action.payload,
                overwrite: false
            }
        }
         if (action.payload === "0" && state.currentOperand === "0") return;
         if (action.payload === "." && state.currentOperand.includes(".")) return;
         return {
          currentOperand: `${state.currentOperand || ""}${action.payload}`
         }
    },

    clearDigit: (state, action) => {
      return {
        currentOperand: "",
        previousOperand: "",
        operation: ""
      }
    },

    deleteDigit: (state, action) => {
      state.currentOperand = action.payload
    },

    chooseOperation: (state, action) => {
        if (state.currentOperand == null && state.previousOperand == null) return;
          
        if (state.currentOperand == null) {
          return {
            operation: action.payload,
          }
        }
    
        if (state.previousOperand == null) {
          return {
            operation: action.payload,
            previousOperand: state.currentOperand,
            currentOperand: null,
          }
        }

        return {
            previousOperand: evaluate(state),
            operation: action.payload,
            currentOperand: null,
          }
    },
      
    evaluateResult: (state, action) => {
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) return;

      return {
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state)
      }
    }
 
  }
})

function evaluate(state) {
    const { currentOperand, previousOperand, operation } = state;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return "";
    let computation = "";
    switch (operation) {
        case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "*":
      computation = prev * current
      break
    case "÷":
      computation = prev / current
      break
    }
    return computation.toString();
}
 
const calculatorReducer = calculatorSlice.reducer;
export default calculatorReducer;
 
export const { addDigit, clearDigit, chooseOperation, evaluateResult } = calculatorSlice.actions;
