import { createSlice } from '@reduxjs/toolkit';

export const HistorySlice  = createSlice({
    name: 'digits',
    initialState: {value: []},
    reducers: {
        add_history: (state, action) => {
            state.value.unshift(action.payload)
        },
        clear_history: (state) => {
            state.value = ''
        },
        set_history: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { add_history, clear_history, set_history } = HistorySlice.actions;

export default HistorySlice.reducer;