import React from "react";
import {useSelector} from "react-redux"

const ITEMS_PER_PAGE = 10;
const Pagination = () => {
    const startIndex= useSelector((state) => state.searchbook.startIndex);
    const currentPage = Math.floor(startIndex / ITEMS_PER_PAGE);

    return(
        <div>
            <div>{children}</div>
            {
            <div>

            </div>}
        </div>
    );
}

export default Pagination