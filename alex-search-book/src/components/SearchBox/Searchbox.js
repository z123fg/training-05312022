import React from "react"
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
import "./Searchbox.css"

const Searchbox = () => {
    const keyword = useSelector((state)=>state.searchbox.keyword);
    const isLoading = useSelector((state) => state.searchbox.isLoading);
    const dispatch = useDispatch();

    const debouncedSearch = useDebounce(() => {
        dispatch(getBooklist());
    }, 1000);

    const throttledSubmit = useThrottle(() => {
        if(isLoading) return
        dispatch(getBooklist());
    }, 1000);

    const handleChange = (e) =>{
        dispatch(updateKeyword(e.target.value));
        if(isLoading) return
        debouncedSearch();
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
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