import React from 'react';
import {useSelector} from "react-redux"
import BookInfo from './BookInfo/BookInfo';
import "./SearchResult.css"


const SearchResult = () => {
  const searchResult = useSelector(state=>state.searchbook.searchResult);
  const isLoading = useSelector(state=>state.searchbook.isLoading);

  return (
    <div className='search-result__container' style={{position:"relative"}}>
      <ul className='search-result__list'>
        {
          searchResult.map(book=>{
            return (
              <BookInfo key={book.id} bookInfo={book}/>
            )
          })
        }
      </ul>
      <div className="loader" style={{display:isLoading?"block":"none"}}></div>
    </div>
  )
}

export default SearchResult