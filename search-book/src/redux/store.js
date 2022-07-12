import { configureStore } from '@reduxjs/toolkit'
import searchbookReducer from './slices/searchbookSlice'
import wishlistReducer from './slices/wishlistSlice'

export const store = configureStore({
  reducer: {
    searchbook: searchbookReducer,
    wishlist:wishlistReducer
  },
  middleware: (getDefaultMiddleware) => {
    console.log("defaultMiddleware", getDefaultMiddleware())
    return getDefaultMiddleware()
  }
})