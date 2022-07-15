//import create slice

import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    wishlist:[],
    totalItems: 0,
    startIndex: 0,
    maxResults: 0
}

const getWishlist = createAsyncThunk("wishlist/getWishlist", async (_, thunkAPI) =>{
    const newWishlist = localStorage.getItem("wishlist");
});

const addBookToWishlist = createAsyncThunk(
    "wishlist/addBookToWishlist",
    async(newBook, thunkAPI) => {
        const prevWishlist = thunkAPI.getState().wishlist.wishlist;
        const nextWishlist = [newBook, ...prevWishlist];
        locatlStoratge.setItem("wishlist",JSON.stringify(nextWishlist))
        return nextWishlist;
    }
);

const deleteBookFromWishlist = createAsyncThunk(
    "wishlist/deleteBookFromWishlist",
    async (index, thunkAPI) => {
        const prevWishlist = thunkAPI.getState().wishlist.wishlit;
        const nextWishlist = prevWishlist.filter((book,index) =>index !== targetIndex)
        localStorage.setItem("wishlist", JSON.stringify(nextWishlist));
        return nextWishlist
    }
)

const wishlistSlice = createSlice(
    {
        name:"wishlist",
        initialState,
        reducers:{
            changePage:(state,action) => {
                const targetPage = action.payload;
                const newStartIndex = 0;
            }
        },
        extraReducers:{
            [getWishlist.pending]:(state,action) =>{

            },
            [getWishlist.fulfilled]:(state,action) =>{
                state.wishlist = action.payload;
                state.totalItems = action.payload.length;
                state.startIndex = 0;
            },
            [getWishlist.rejected]:(state,action) =>{
                alert("get booklist failed")
            },
            [addBookToWishlist.pending]:(state, actoin) => {

            },
            [addBookToWishlist.fulfilled]:(state, actoin) => {
                state.wishlist = action.payload;
                state.totalItems = action.payload.length;
                state.startIndex;
            },
            [addBookToWishlist.rejected]:(state, actoin) => {
                alert("add book to wishlist failed")
            },
            [deleteBookFromWishlist.pending]:(state, actoin) => {

            },
            [deleteBookFromWishlist.fulfilled]:(state, actoin) => {
                // const targetIndex = action.meta.arg;
                // if (targetIndex === totalItems -1 ) {

                // }
                state.wishlist = action.payload;
                state.totalItems = action.payload.length;
                state.storeIndex = 0;
                
            },
            [deleteBookFromWishlist.rejected]:(state, actoin) => {
                alert("delete book from wishlist failed")
            },
        },
    }
)

const wishlistReducer = wishlistSlice.reducer;
export default wishlistReducer;