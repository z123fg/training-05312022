import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  cumulateResult: "",
  currentResult: "",
  isCalculate: false,
};

const userinputSlice = createSlice({
  name: "userinput",
  initialState,
  reducers: {
    updateKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

const userinputReducer = userinputSlice.reducer;
export default userinputReducer;
