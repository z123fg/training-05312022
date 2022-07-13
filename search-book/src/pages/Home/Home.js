import React from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import SearchResult from "../../components/SearchResult/SearchResult";

const Home = () => {
  //searchbox, searchresult, pagination
  return (
    <div>
      <Searchbox />
      <SearchResult />
    </div>
  );
};

export default Home;
