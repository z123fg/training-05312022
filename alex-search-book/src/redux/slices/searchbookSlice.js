import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    searchResult:[],
    keyword:"",
    totalItems:0,
    startIndex:0,
    maxResults:10,
    isLoading: false,
}

/**
 * updateKeyword(keyword),
 * getBooklist,
 * changePage(pageNum),
 * 
 */

const getBookList = createAsyncThunk(
    "searchbook/getBooklist",
    async (_, thunkAPI) =>{
        const keyword = thunkAPI.getState().searchbook.keyword;
        const maxResults = thunkAPI.getState().searchbook.maxResults;

        const res = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=${maxResults}`
        );
        return res.data;
    }
);

export const changePage = createAsyncThunk(
    "searchbook/changePage",
    async (pageNum, thunkAPI) => {

        const keyword = thunkAPI.getState().searchbook.keyword;
        const maxResults = thunkAPI.getState().searchbook.maxResults;
        const totalItems = thunkAPI.getState().searchbook.totalItems;


        const totalPages = math.ceil(totalItems / maxResults);
        if(pageNum<=0 || pageNum > totalPages){
            return thunkAPI.rejectWithValue("page number is not valid");
        }
        const res = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=${
                (pageNum - 1) * maxResults
            }&maxResults=${maxResults}`
        );
        return res.data;
    }
);

const searchbookReducer = createSlice({
        name:"searchbook",
        initialState,
        reducer:{
            updateKeyword:(state, action) =>{
                state.keyword = action.payload;
            },
        },
        extraReducers: {
            [getBookList.pending]: (state, action) => {
                state.isLoading = true;
            },
            [getBookList.fulfilled]: (state, action) => {
                state.totalItems = action.payload.totalItems;
                state.searchResult = action.payload.items;
                state.isLoading = false;
            },
            [getBookList.rejected]: (state, action) => {
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
                const startIndex = (pageNum - 1) * maxResults;
                state.startIndex = startIndex;
            },
            [changePage.rejected]: (state, action) => {
                alert(action.payload);
            },
        }
    }
)
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
const serachbookReducer = searchbookSlice.reducer
export default serachbookReducer;

export const {updateKeyword} = searchbookSlice.actions;


