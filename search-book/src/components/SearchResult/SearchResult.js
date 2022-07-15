import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBookToWishlist } from "../../redux/slices/wishlistSlice";
import BookInfo from "./BookInfo/BookInfo";
import "./SearchResult.css";

const SearchResult = () => {
  const searchResult = useSelector((state) => state.searchbook.searchResult);
  const isLoading = useSelector((state) => state.searchbook.isLoading);
  //console.log("searchResult", searchResult);
  const dispatch = useDispatch();
  
  const handleAddWishlist = (newBook) => {
      dispatch(addBookToWishlist(newBook));
  }

  return (
    <div className="search-result__container" style={{ position: "relative" }}>
      {!isLoading && (
        <ul className="search-result__list">
          {searchResult.map((book) => {
            return (
              <li onClick={()=>handleAddWishlist(book)}>
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
