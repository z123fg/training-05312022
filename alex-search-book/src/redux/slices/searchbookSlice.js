import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchResult:[],
    keyword:"",
    totalItems:0,
    startIndex:0,
    maxResults:5
}

const searchbookReducer = createSlice(
    {
        name:"searchbook",
        initialState,
        reducer:{
            updateKeyword:(state, action) =>{
                state.keyword = action.payload;
            }
        }
    }
)

const serachbookReducer = searchbookSlice.reducer
export default serachbookReducer;

export const {updateKeyword} = searchbookSlice.actions;


