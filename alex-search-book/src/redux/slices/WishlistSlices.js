//import create slice

import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    wishlist:[],
    wishlistForCurPage:[],
    totalItems: 0,
    startIndex: 0,
    maxResults: 5
}

export const getWishlist = createAsyncThunk(
    "wishlist/getWishlist", 
    async () =>{
    const newWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    return newWishlist;
});

const addBookToWishlist = createAsyncThunk(
    "wishlist/addBookToWishlist",
    async(newBook, thunkAPI) => {
        const prevWishlist = thunkAPI.getState().wishlist.wishlist;
        let nextWishlist;
        if (prevWishlist.some((book) => book.id === newBook.id)){
            nextWishlist = [...prevWishlist];
        } else {
            nextWishlist = [newBook, ...prevWishlist];
        }
        locatlStoratge.setItem("wishlist",JSON.stringify(nextWishlist))
        return nextWishlist;
    }
);

const deleteBookFromWishlist = createAsyncThunk(
    "wishlist/deleteBookFromWishlist",
    async (index, thunkAPI) => {
        const prevWishlist = thunkAPI.getState().wishlist.wishlit;
        const nextWishlist = prevWishlist.filter(
            (book, index) => index !== targetIndex
        );
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
                const totalItems = state.totalItems;
                const maxResults = state.maxResults;
                const totalPages = Math.ceil(totalItems / maxResults);
                if(targetPage <= 0 || targetPage > totalPages) {
                    alert("page number is not valid");
                    return;
                }
                const newStartIndex = (targetPage - 1) * state.maxResults;
                state.startIndex = newStartIndex;
                state.wishlistForCurPage = state.wishlist.slice(
                    newStartIndex,
                    nweStartIndex + state.maxResults
                );
            },
        },
        extraReducers:{
            [getWishlist.pending]:(state,action) =>{

            },
            [getWishlist.fulfilled]:(state,action) =>{
                state.wishlist = action.payload;
                state.wishlistForCurPage = action.payload.slice(0, state.maxResults);
                state.totalItems = action.payload.length;
                state.startIndex = 0;
            },
            [getWishlist.rejected]:(state,action) =>{
                console.log("rejected", action.payload);
                alert("get booklist failed");
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
                state.wishlistForCurPage = action.payload.slice(0, state.maxResults);
                state.totalItems = action.payload.length;
                state.storeIndex = 0;
                
            },
            [deleteBookFromWishlist.rejected]:(state, actoin) => {
                alert("delete book from wishlist failed")
            },
        },
    }
);

const wishlistReducer = wishlistSlice.reducer;
export default wishlistReducer;

export  const {changePage} = wishlistSlice.actions;