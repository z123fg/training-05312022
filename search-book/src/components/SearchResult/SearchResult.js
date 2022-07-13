import React from 'react';
import {useSelector} from "react-redux"

const SearchResult = () => {
  const searchResult = useSelector(state=>state.searchbook.searchResult);
  const isLoading = useSelector(state=>state.searchbook.isLoading);

  return (
    <div style={{position:"relative"}}>
      <ul>
        {
          searchResult.map(book=>{
            return (
              <li key={book?.id}>
                {book?.volumeInfo?.title}
              </li>
            )
          })
        }
      </ul>
      <div className="loader" style={{display:isLoading?"block":"none"}}></div>
    </div>
  )
}

export default SearchResult