import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useState } from "react";
import Header from "./components/Header/Header";
import Wishlist from "./pages/Wishlist/Wishlist";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
/* 
  location:
    host:hostname + port
    hostname:
    port
    origin: protocol + host
    hash:
    href:everything
    search: key value pair: ?key1=value1&key2=value2&key3=value3....
    pathname: key
    reload: method that refresh the page
    assign: will create new history record
    replace: will not create history record

  history:
    back
    forward
    go
    pushState: create new history record, without refreshing page
    replaceState: replace current history record, without refreshing page


  advantage of routing: customize url, history record

*/
function App() {
  const [curPage, setCurPage] = useState("home");

  const handleChangePage = (page) => {
    setCurPage(page);
  };
  console.log("BrowserRouter",BrowserRouter)
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Header handleChangePage={handleChangePage} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
          {/* {curPage === "home" ? (
          <Home />
        ) : curPage === "wishlist" ? (
          <Wishlist />
        ) : null} */}
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
