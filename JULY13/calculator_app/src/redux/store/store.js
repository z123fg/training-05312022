import { configureStore } from '@reduxjs/toolkit';

import DigitReducer from '../../components/Calculator/ReduxReducers/DigitReducer';
import HistoryReducer from '../../components/Calculator/ReduxReducers/HistoryReducer';

export const store = configureStore({
    reducer: {
        digit: DigitReducer,
        history: HistoryReducer
    },
})