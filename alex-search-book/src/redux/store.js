import { configureStore } from "@reduxjs/toolkit";
import serachbookReducer from "./slices/searchbookSlice";
import wishlistReducer from "./slices/WishlistSlices";

export const store = configureStore({
    reducer:{
        searchbook: serachbookReducer,
        wishlist: wishlistReducer
    },
    middleware: (getDefaultMiddleware) => {
        console.log("defaultMiddleware", getDefaultMiddleware())
        return getDefaultMiddleware()
    }
})