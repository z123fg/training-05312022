import { createSlice } from '@reduxjs/toolkit';

export const DigitsSlice  = createSlice({
    name: 'digits',
    initialState: {value: ''},
    reducers: {
        add: (state, action) => {
            state.value = state.value + action.payload
        },
        backspace: (state) => {
            state.value = state.value.slice(0, -1)
        },
        clear: (state) => {
            state.value = ''
        },
        set: (state, action) => {
            state.value = String(action.payload)
        }
    }
});

export const { add, backspace, clear, set } = DigitsSlice.actions;

export default DigitsSlice.reducer;