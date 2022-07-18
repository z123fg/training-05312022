import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import BookInfo from "../../components/SearchResult/BookInfo/BookInfo";
import { changePage, deleteBookFromWishlist, getWishlist } from "../../redux/slices/wishlistSlice";
import "./Wishlist.css";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const startIndex = useSelector((state) => state.wishlist.startIndex);
  const maxResults = useSelector((state) => state.wishlist.maxResults);
  const totalItems = useSelector((state) => state.wishlist.totalItems);
  const wishlistForCurPage =  useSelector((state) => state.wishlist.wishlistForCurPage);

  const dispatch = useDispatch();
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

  //WishlistResult, Pagination
  return (
    <div className="wishlist__container">
      <Pagination 
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        startIndex={startIndex}
        items={wishlistForCurPage}
        maxResults={maxResults}
        totalItems={totalItems}
        isLoading={true}
      >
        {wishlist.length > 0 ? (
          <ul className="wishlist__list">
            {wishlistForCurPage.map((bookInfo, index) => (
              <li key={bookInfo.id} onClick={()=>handleDeleteWishlist(index)}>
                <BookInfo bookInfo={bookInfo} />
              </li>
            ))}
          </ul>
        ) : (
          <span>no book in the wishlist</span>
        )}
      </Pagination>
    </div>
  );
};

export default Wishlist;
