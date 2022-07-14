import React from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import SearchResult from "../../components/SearchResult/SearchResult";
import "./Home.css"

const Home = () => {
  //searchbox, searchresult, pagination
  return (
    <div className="home__container">
      <Searchbox />
      <SearchResult />
    </div>
  );
};

export default Home;
