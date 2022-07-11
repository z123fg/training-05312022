import { createSlice } from '@reduxjs/toolkit'


const initialState = {

}


const wishlistSlice = createSlice(
  {
    name:"wishlist",
    initialState,
    reducers:{
    }
  }
)

const wishlistReducer =  wishlistSlice.reducer;
export default wishlistReducer

//export const {}=  wishlistSlice.actions;