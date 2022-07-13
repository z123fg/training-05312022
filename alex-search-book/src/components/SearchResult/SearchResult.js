import React from "react";

const SearchResult = () => {
    const searchResult = useSelector(state=>state.searchbook.searchResult);

    return (
        <div>
            <ul>
                {/* {
                    searchResult.map(book=>{
                        return{
                            <li key={book?.id}>
                        }
                    })
                } */}
            </ul>
        </div>
    )
}

export default SearchResult;