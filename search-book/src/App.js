import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { useState } from 'react';
import Header from './components/Header/Header';
import Wishlist from './pages/Wishlist/Wishlist';
import Home from './pages/Home/Home';

function App() {
  const [curPage, setCurPage] = useState("home");

  const handleChangePage = (page) => {
    setCurPage(page)
  }
  return (
    <Provider store={store}>
      <Header handleChangePage={handleChangePage}/>
      {
        curPage==="home"?
        <Home/>
        :curPage==="wishlist"?
        <Wishlist/>
        :null
      }
      
    </Provider>
    
  );
}

export default App;
