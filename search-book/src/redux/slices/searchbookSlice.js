import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  searchResult: [],
  keyword: "",
  totalItems: 0,
  startIndex: 0,
  maxResults: 5,
  isLoading:false,
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
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
    );
    return res.data.items
  }
);

const searchbookSlice = createSlice({
  name: "searchbook",
  initialState,
  reducers: {
    updateKeyword: (state, action) => {
      state.keyword = action.payload;
    }   
  },
  extraReducers:{
    [getBooklist.pending]:(state, action) => { //lifecycle actions, intermediate actions
        state.isLoading = true;
    },
    [getBooklist.fulfilled]:(state, action) => {
      state.searchResult = action.payload;
      state.isLoading = false;
    },
    [getBooklist.rejected]:(state, action) => {
      console.log("rejected");
      state.isLoading = false;
    }
  }
});

const searchbookReducer = searchbookSlice.reducer;
export default searchbookReducer;

export const { updateKeyword, test } = searchbookSlice.actions;
console.log("test", test);
console.log("updateKeyword", updateKeyword)

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
