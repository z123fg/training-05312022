import React from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Pagination from "../../../../search-book/src/components/Pagination/Pagination";
import Searchbox from "../../components/SearchBox/Searchbox";
import "./Home.css"

const Home = () => {
    const startIndex = useSelector((state) => state.searchbox.startIndex);
    const searchResult = useSelector((state) => state.searchbook.searchResult);
    const  maxResults = useSelector((state) => state.searchbook.maxResults);
    const totalItems = useSelector((state) => state.searchbook.totalItems);
    const isLoading = useSelector((state) => state.searchbook.isLoading);
    const dispatch = useDispatch();

    const handleClickPrev = () => {
        const currentPage = Math.floor(startIndex / maxResults) +1;
        dispatch(changePage(currentPage - 1));
    }

    const handleClickNext = () => {
        const currentPage = Math.floor(startIndex / maxResults) + 1;
        dispatch(changePage(currentPage +1));
    }
    
    //searchbox, searchResult, pagination
    return (
        <div className="home__container">
            <Searchbox/>
            <Pagination 
                handleClickNext={handleClickNext}
                handleClickPrev={handleClickPrev}
                startIndex={startIndex}
                items={searchResult}
                maxResults={maxResults}
                totalItems={totalItems}
                isLoading={isLoading}>
                <SearchResult/>
            </Pagination>
        </div>
    )
}

export default Home;