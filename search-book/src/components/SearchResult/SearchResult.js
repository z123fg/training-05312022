import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useMyDispatch from "../../redux-demo/useMyDispatch";
import useMySelector from "../../redux-demo/useMySelector";
import { addBookToWishlist } from "../../redux/slices/wishlistSlice";
import BookInfo from "./BookInfo/BookInfo";
import "./SearchResult.css";

const SearchResult = () => {
  const searchResult = useMySelector((state) => state.searchbook.searchResult);
  const isLoading = useMySelector((state) => state.searchbook.isLoading);
  //console.log("searchResult", searchResult);
  const dispatch = useMyDispatch();
  
  const handleAddWishlist = (newBook) => {
      dispatch(addBookToWishlist(newBook));
  }

  return (
    <div className="search-result__container" style={{ position: "relative" }}>
      {!isLoading && (
        <ul className="search-result__list">
          {searchResult.map((book) => {
            return (
              <li key={book.id} onClick={()=>handleAddWishlist(book)}>
                <BookInfo key={book.id} bookInfo={book} />
              </li>
            );
          })}
        </ul>
      )}
      <div
        className="loader"
        style={{ display: isLoading ? "block" : "none" }}
      ></div>
    </div>
  );
};

export default SearchResult;
