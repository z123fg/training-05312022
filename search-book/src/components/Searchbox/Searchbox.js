import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import useThrottle from "../../hooks/useThrottle";
import useMyDispatch from "../../redux-demo/useMyDispatch";
import useMySelector from "../../redux-demo/useMySelector";
import {
  getBooklist,
  getBookListAndUpdateState,
  updateKeyword,
} from "../../redux/slices/searchbookSlice";
import "./Searchbox.css";

/* 
  prevent necessary action
    debouncing: Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in “execute this function only if 1000 milliseconds have passed without it being called
    throttling: Throttling enforces a maximum number of times a function can be called over time. As in “execute this function at most once every 100 milliseconds.
*/

const Searchbox = () => {
  const keyword = useMySelector((state) => state.searchbook.keyword);
  const isLoading = useMySelector((state) => state.searchbook.isLoading);
  const dispatch = useMyDispatch();

  const debouncedSearch = useDebounce(() => { 
    
    dispatch(getBooklist());
  }, 1000);

  const throttledSubmit = useThrottle(() => {
    if(isLoading) return 
    dispatch(getBooklist());
  }, 1000);


  const handleChange = (e) => {
    //console.log("action",updateKeyword(e.target.value))
    dispatch(updateKeyword(e.target.value));
    if(isLoading) return 
    debouncedSearch();
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(getBookListAndUpdateState());
    throttledSubmit();
  };
  return (
    <form onSubmit={handleSubmit} className="searchbox__container">
      <input value={keyword} onChange={handleChange} />
      <button>submit</button>
    </form>
  );
};

export default Searchbox;
