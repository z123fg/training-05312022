import logo from './logo.svg';
import './App.css';
import { store } from "./redux/store";
import { useState } from "react";
import Header from "./components/Header/Header";
import Wishlist from "./pages/Wishlist/Wishlist";
import Home from "./pages/Home/Home";
import MyBrowserRouter from '../../search-book/src/router-demo/MyBrowserRouter';
import MyProvider from '../../search-book/src/redux-demo/MyProvider';
import MyRoutes from '../../search-book/src/router-demo/MyRoutes';
import MyRoute from '../../search-book/src/router-demo/MyRoute';

function App() {
  const [curPage, setCurPage] = useState("home");

  const handleChangePage = (page) => {
    setCurPage(page);
  };

  return (
    <div>
      <MyBrowserRouter>
        <MyProvider>
          <Header handleChangePage={handleChangePage}/>

          <MyRoutes>
            <MyRoute path="/" element={<Home/>}/>
            <MyRoute path="/home" element={<Home />} />
            <MyRoute path="/wishlist" element={<Wishlist />} />
          </MyRoutes>
        </MyProvider>
      </MyBrowserRouter>
    </div>
  );
}

export default App;
