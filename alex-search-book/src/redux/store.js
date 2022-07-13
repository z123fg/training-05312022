import { configureStore } from "@reduxjs/toolkit";
import serachbookReducer from "./slices/searchbookSlice";

export const store = configureStore({
    reducer:{
        searchbook: serachbookReducer,
        wishlist: wishlistReducer
    }
})