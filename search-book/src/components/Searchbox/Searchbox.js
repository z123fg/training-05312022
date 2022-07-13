import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { getBooklist, getBookListAndUpdateState, updateKeyword } from "../../redux/slices/searchbookSlice";

const Searchbox = () => {
  const keyword = useSelector(state=>state.searchbook.keyword);
  const dispatch = useDispatch()
  //searchbox, searchresult, pagination

  const handleChange = (e) => {
    //console.log("action",updateKeyword(e.target.value))
    dispatch(updateKeyword(e.target.value))
  }

  const handleSubmit = () => {
    //dispatch(getBookListAndUpdateState());
    dispatch(getBooklist())
  }
  return (
    <div>
      <input value={keyword} onChange={handleChange}/>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Searchbox;