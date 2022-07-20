import React, { useEffect } from "react"
import {useSelector} from "react-redux"
import BookInfo from "../../../../search-book/src/components/SearchResult/BookInfo/BookInfo";
import { deleteBookFromWishlist } from "../../../../search-book/src/redux/slices/wishlistSlice";
import "./Wishlist.css"


const Wishlist= () => {
    const wishlist = useSelector((state) => state.wishlist.wishlist);
    const startIndex = useSelector((state) => state.wishlist.startIndex);
    const maxResults = useSelector((state) => state.wishlist.maxResults);
    const totalItems = useSelector((state) => state.wishlist.totalItems);
    const wishlistForCurPage = useSelector((state) => state.wishlist.wishlistForCurPage);

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getWishlist());
    }, []);

    const handleClickPrev = () => {
        const currentPage = Math.floor(startIndex / maxResults) + 1;
        dispatch(changePage(currentPage - 1));
    }

    const handleClickNext = () => {
        const currentPage = Math.floor(startIndex / maxResults) + 1;
        dispatch(changePage(currentPage + 1));
    }

    const handleDeleteWishlist = (index) => {
        dispatch(deleteBookFromWishlist(index))
    }


    //wishlistResult, pagination
    return (
        <>
        <div className="wishlist__container">
            <Pagination
            handleClickNext={handleClickNext}
            handleClickPrev={handleClickPrev}
            startIndex={startIndex}
            items={wishlistForCurPage}
            maxResluts ={maxResults}
            totalItems = {totalItems}
            isLoading = {true}>
                {wishlist.length > 0 ? (
                    <ul className = "wishlist__list">
                        {wishlistForCurPage.map((BookInfo, index) =>(
                            <li key={bookInfo.id} onClick={() => handleDeleteWishlist(index)}>
                                <BookInfo bookInfo={bookInfo}/>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <span>no book in the wishlist</span>
                )}
            </Pagination>
        </div></>
    )
}

export default Wishlist;