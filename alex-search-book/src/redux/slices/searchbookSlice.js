import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    searchResult:[],
    keyword:"",
    totalItems:0,
    startIndex:0,
    maxResults:5
}

/**
 * updateKeyword(keyword),
 * getBooklist,
 * changePage(pageNum),
 * 
 */

const getBookList = createAsyncThunk(
    //shit goes here
)

export const changePage = createAsyncThunk(
    "searchbook/changePage",
    async (pageNum, thunkAPI) => {

        const keyword = thunkAPI.getState().searchbook.keyword;
        const maxResults = thunkAPI.getState().searchbook.maxResults;
        const totalItems = thunkAPI.getState().searchbook.totalItems;


        const totalPages = math.ceil(totalItems / maxResults);
        if(pageNum<=0 || pageNum > totalPages){
            
        }
        const res = await axios.get(
            //webpage goes here
        );
    }
)

const searchbookReducer = createSlice(
    {
        name:"searchbook",
        initialState,
        reducer:{
            updateKeyword:(state, action) =>{
                state.keyword = action.payload;
            },
            getBookList:(state, action) = {
                //api request, side effect
                //update state
            },
            upsateBooklist: (state, action) => {
                state.searchResult = action.payload;
            }
        }
    }
)
const getBookListAndUpdateState = () => (dispatch, getState) =>{
    axios.get(URL).then(res=>{
        dispatch(updateBooklist(res.data.list))
    }).catch((err) =>{
        //die
    })

}

const serachbookReducer = searchbookSlice.reducer
export default serachbookReducer;

export const {updateKeyword} = searchbookSlice.actions;


