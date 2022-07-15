import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  searchResult: [],
  keyword: "",
  totalItems: 0,
  startIndex: 0,
  maxResults: 10,
  isLoading: false,
};

/* 
  updateKeyword(keyword),
  getBooklist,
  changePage(pageNum),
*/

/* 
  redux thunk: middleware of redux
*/

export const getBooklist = createAsyncThunk(
  "searchbook/getBooklist",
  async (_, thunkAPI) => {
    const keyword = thunkAPI.getState().searchbook.keyword;
    const maxResults = thunkAPI.getState().searchbook.maxResults;

    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=${maxResults}`
    );
    return res.data;
  }
);

/* 
  server side pagination
*/

export const changePage = createAsyncThunk(
  "searchbook/changePage",
  async (pageNum, thunkAPI) => {
    const keyword = thunkAPI.getState().searchbook.keyword;
    const maxResults = thunkAPI.getState().searchbook.maxResults;
    const totalItems = thunkAPI.getState().searchbook.totalItems;
    /* 
      totalItems = 21;
      maxResults = 10;
      totalPages = 3;
    */
    const totalPages = Math.ceil(totalItems / maxResults);
    if (pageNum <= 0 || pageNum > totalPages) {
      return thunkAPI.rejectWithValue("page number is not valid");
      
    }
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&startIndex=${
        (pageNum - 1) * maxResults
      }&maxResults=${maxResults}`
    );
    return res.data;
  }
);

const searchbookSlice = createSlice({
  name: "searchbook",
  initialState,
  reducers: {
    updateKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
  extraReducers: {
    [getBooklist.pending]: (state, action) => {
      //lifecycle actions, intermediate actions
      state.isLoading = true;
    },
    [getBooklist.fulfilled]: (state, action) => {
      state.totalItems = action.payload.totalItems;
      state.searchResult = action.payload.items;
      state.isLoading = false;
    },
    [getBooklist.rejected]: (state, action) => {
      console.log("rejected");
      state.isLoading = false;
    },
    [changePage.pending]: (state, action) => {
      state.isLoading = true;
    },
    [changePage.fulfilled]: (state, action) => {
      state.totalItems = action.payload.totalItems;
      state.searchResult = action.payload.items;
      state.isLoading = false;
      const pageNum = action.meta.arg;
      const maxResults = state.maxResults;
      const startIndex = (pageNum - 1) * maxResults
      state.startIndex = startIndex;
    },
    [changePage.rejected]: (state, action) => {
      alert(action.payload)
    },
  },
});

const searchbookReducer = searchbookSlice.reducer;
export default searchbookReducer;

export const { updateKeyword } = searchbookSlice.actions;

// export const getBookListAndUpdateState = () => (dispatch, getState) => {
//   axios
//     .get("https://www.googleapis.com/books/v1/volumes?q=book")
//     .then((res) => {
//       console.log("res", res);
//       dispatch(updateBooklist(res.data.items));
//     })
//     .catch((err) => {
//       //dispatch(updateBookListfailed())
//     });
// };
