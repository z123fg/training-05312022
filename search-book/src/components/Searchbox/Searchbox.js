import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { getBooklist, getBookListAndUpdateState, updateKeyword } from "../../redux/slices/searchbookSlice";
import "./Searchbox.css"


const Searchbox = () => {
  const keyword = useSelector(state=>state.searchbook.keyword);
  const dispatch = useDispatch()
  //searchbox, searchresult, pagination

  const handleChange = (e) => {
    //console.log("action",updateKeyword(e.target.value))
    dispatch(updateKeyword(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //dispatch(getBookListAndUpdateState());
    dispatch(getBooklist())
  }
  return (
    <form onSubmit={handleSubmit} className="searchbox__container">
      <input value={keyword} onChange={handleChange}/>
      <button>submit</button>
    </form>
  )
}

export default Searchbox;