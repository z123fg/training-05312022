import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useState } from "react";
import Header from "./components/Header/Header";
import Wishlist from "./pages/Wishlist/Wishlist";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyProvider from "./redux-demo/MyProvider";
import MyBrowserRouter from "./router-demo/MyBrowserRouter";
import MyRoutes from "./router-demo/MyRoutes";
import MyRoute from "./router-demo/MyRoute";
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
  return (
    <div>
      <MyBrowserRouter>
        <MyProvider store={store}>
          <Header handleChangePage={handleChangePage} />

          <MyRoutes>
            <MyRoute path="/" element={<Home/>} />
            <MyRoute path="/home" element={<Home />} />
            <MyRoute path="/wishlist" element={<Wishlist />} />
          </MyRoutes>
          {/* {curPage === "home" ? (
          <Home />
        ) : curPage === "wishlist" ? (
          <Wishlist />
        ) : null} */}
        </MyProvider>
      </MyBrowserRouter>
    </div>
  );
}

export default App;
