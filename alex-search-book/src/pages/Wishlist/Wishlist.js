import React, { useEffect } from "react"
import Pagination from "../../components/Pagination/Pagination";
import BookInfo from "../../components/SearchResult/BookInfo/BookInfo";
import useMyDispatch from "../../redux-demo/useMyDispatch";
import useMySelector from "../../redux-demo/useMySelector";
import { changePage, deleteBookFromWishlist, getWishlist } from "../../redux/slices/wishlistSlice";
import "./Wishlist.css"


const Wishlist= () => {
    const wishlist = useMySelector((state) => state.wishlist.wishlist);
    const startIndex = useMySelector((state) => state.wishlist.startIndex);
    const maxResults = useMySelector((state) => state.wishlist.maxResults);
    const totalItems = useMySelector((state) => state.wishlist.totalItems);
    const wishlistForCurPage =  useMySelector((state) => state.wishlist.wishlistForCurPage);

    const dispatch = useMyDispatch();
    useEffect(() => {
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
                        {wishlistForCurPage.map((bookInfo, index) =>(
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