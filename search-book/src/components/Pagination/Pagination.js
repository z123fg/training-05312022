import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../redux/slices/searchbookSlice";
import "./Pagination.css";

const Pagination = ({ children }) => {
  const startIndex = useSelector((state) => state.searchbook.startIndex);
  const searchResult = useSelector((state) => state.searchbook.searchResult);
  const maxResults = useSelector((state) => state.searchbook.maxResults);
  const totalItems = useSelector((state) => state.searchbook.totalItems);
  const isLoading = useSelector((state) => state.searchbook.isLoading);


  useEffect(()=>{
    if(isLoading){
      window.scrollTo({top:0})
    }
  },[isLoading])

  const currentPage = Math.floor(startIndex / maxResults) + 1;
  const totalPages = Math.ceil(totalItems / maxResults);



  const dispatch = useDispatch();

  const handleClickPrev = () => {
    dispatch(changePage(currentPage - 1));
  };

  const handleClickNext = () => {
    dispatch(changePage(currentPage + 1));
  };
  return (
    <div className="pagination__container">
      <div>{children}</div>
      {searchResult?.length > 0 && (
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
