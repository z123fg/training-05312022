import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  wishlistForCurPage:[],
  totalItems: 0, //total number of books
  startIndex: 0,
  maxResults: 5, //books per page
};



export const getWishlist = createAsyncThunk(
  "wishlist/getWishlist",
  async () => {
    const newWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]"); //undefined null, false 0 []
    return newWishlist;
  }
);

export const addBookToWishlist = createAsyncThunk(
  "wishlist/addBookToWishlist",
  async (newBook, thunkAPI) => {
    const prevWishlist = thunkAPI.getState().wishlist.wishlist;
    let nextWishlist;
    if (prevWishlist.some((book) => book.id === newBook.id)) {
      nextWishlist = [...prevWishlist];
    } else {
      nextWishlist = [newBook, ...prevWishlist];
    }
    localStorage.setItem("wishlist", JSON.stringify(nextWishlist));
    return nextWishlist;
  }
);

export const deleteBookFromWishlist = createAsyncThunk(
  "wishlist/deleteBookFromWishlist",
  async (targetIndex, thunkAPI) => {
    const prevWishlist = thunkAPI.getState().wishlist.wishlist;
    const nextWishlist = prevWishlist.filter(
      (book, index) => index !== targetIndex
    );
    localStorage.setItem("wishlist", JSON.stringify(nextWishlist));
    return nextWishlist;
  }
);

/* 
  client side pagination
*/

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    changePage: (state, action) => {
      const targetPage = action.payload;
      const totalItems = state.totalItems;
      const maxResults = state.maxResults;
      const totalPages = Math.ceil(totalItems / maxResults);
      if (targetPage <= 0 || targetPage > totalPages) {
        alert("page number is not valid");
        return;
      }
      const newStartIndex = (targetPage - 1) * state.maxResults;
      state.startIndex = newStartIndex;
      state.wishlistForCurPage = state.wishlist.slice(
        newStartIndex,
        newStartIndex + state.maxResults
      );
    },
  },
  extraReducers: {
    [getWishlist.pending]: (state, action) => {
      //nothing
    },
    [getWishlist.fulfilled]: (state, action) => {
      state.wishlist = action.payload;
      state.wishlistForCurPage = action.payload.slice(0, state.maxResults)
      state.totalItems = action.payload.length;
      state.startIndex = 0;
    },
    [getWishlist.rejected]: (state, action) => {
      console.log("rejected", action.payload);
      alert("get booklist failed!");
    },
    [addBookToWishlist.pending]: (state, action) => {
      //nothing
    },
    [addBookToWishlist.fulfilled]: (state, action) => {
      state.wishlist = action.payload;
      state.totalItems = action.payload.length;
      state.startIndex = 0;
    },
    [addBookToWishlist.rejected]: (state, action) => {
      alert("add book to wishlist failed!");
    },
    [deleteBookFromWishlist.pending]: (state, action) => {
      //nothing
    },
    [deleteBookFromWishlist.fulfilled]: (state, action) => {
      /*       const targetIndex = action.meta.arg;
      if(targetIndex === totalItems - 1 &&) */
      state.wishlist = action.payload;
      state.wishlistForCurPage = action.payload.slice(0, state.maxResults)
      state.totalItems = action.payload.length;
      state.startIndex = 0;
    },
    [deleteBookFromWishlist.rejected]: (state, action) => {
      alert("delete book to wishlist failed!");
    },
  },
});

/* 
  0~4
  5
  5

*/

const wishlistReducer = wishlistSlice.reducer;
export default wishlistReducer;

export const {changePage}=  wishlistSlice.actions;
