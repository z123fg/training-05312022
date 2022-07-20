import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import Searchbox from "../../components/Searchbox/Searchbox";
import SearchResult from "../../components/SearchResult/SearchResult";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import { changePage } from "../../redux/slices/searchbookSlice";
import useMySelector from "../../redux-demo/useMySelector";
import useMyDispatch from "../../redux-demo/useMyDispatch";

const Home = () => {
  //searchbox, searchresult, pagination
  const startIndex = useMySelector((state) => state.searchbook.startIndex);
  const searchResult = useMySelector((state) => state.searchbook.searchResult);
  const maxResults = useMySelector((state) => state.searchbook.maxResults);
  const totalItems = useMySelector((state) => state.searchbook.totalItems);
  const isLoading = useMySelector((state) => state.searchbook.isLoading);
  const dispatch = useMyDispatch();
  const handleClickPrev = () => {
    const currentPage = Math.floor(startIndex / maxResults) + 1;
    dispatch(changePage(currentPage - 1));
  };

  const handleClickNext = () => {
    const currentPage = Math.floor(startIndex / maxResults) + 1;
    dispatch(changePage(currentPage + 1));
  };
  return (
    <div className="home__container">
      <Searchbox />
      <Pagination
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        startIndex={startIndex}
        items={searchResult}
        maxResults={maxResults}
        totalItems={totalItems}
        isLoading={isLoading}
      >
        <SearchResult />
      </Pagination>
    </div>
  );
};

export default Home;
