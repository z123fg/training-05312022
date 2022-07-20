import React, { useEffect } from "react";
import {useSelector} from "react-redux"

//const ITEMS_PER_PAGE = 10;
const Pagination = ({children, startIndex, items, maxResults, totalItems, isLoading, handleClickNext, handleClickPrev }) => {
    
    useEffect(()=>{
        if(isLoading){
            window.scrollTo({top:0})
        }
    }, [isLoading])
    
    const startIndex= useSelector((state) => state.searchbook.startIndex);
    const currentPage = Math.floor(startIndex / maxResults) +1;
    const totalPages = Math.ceil(totalItems / maxResults);

    return(
        <div className="pagination__container">
            <div>{children}</div>
            {item?.length > 0 && (
                <div className="page-button__container">
                    <button disabled={currentPage <= 1} onClick={handleClickPrev}>
                        prev
                    </button>
                    <span>{currentPage}</span>
                    <button 
                        disabled={currentPage >= totalPages}
                        onClick={handleClickNext}
                        >
                            next
                        </button>
                </div>
            )}
        </div>
    );
};

export default Pagination;