import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  searchResult:[],
  keyword:"",
  totalItems:0,
  startIndex:0,
  maxResults:5
}


const searchbookSlice = createSlice(
  {
    name:"searchbook",
    initialState,
    reducers:{
      updateKeyword:(state, action)=>{
        state.keyword = action.payload
      }
    }
  }
)

const searchbookReducer =  searchbookSlice.reducer;
export default searchbookReducer

export const {updateKeyword}=  searchbookSlice.actions;
