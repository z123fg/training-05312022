import { configureStore } from '@reduxjs/toolkit'
import searchbookReducer from './slices/searchbookSlice'
import wishlistReducer from './slices/wishlistSlice'


//createStore: args: reducer, enhancer, return obj with 3 property: getState, subscribe, dispatch
//configureStore: arg: option obj, return obj with 3 property: getState, subscribe, dispatch
export const store = configureStore({
  reducer: {
    searchbook: searchbookReducer,
    wishlist:wishlistReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
  }
});


