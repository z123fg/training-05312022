import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import Searchbox from "../../components/Searchbox/Searchbox";
import SearchResult from "../../components/SearchResult/SearchResult";
import "./Home.css";

const Home = () => {
  //searchbox, searchresult, pagination
  return (
    <div className="home__container">
      <Searchbox />
      <Pagination>
        <SearchResult />
      </Pagination>
    </div>
  );
};

export default Home;
