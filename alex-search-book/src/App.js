import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {store } from './redux/store'
import Wishlist from './pages/Wishlist/Wishlist';

function App() {
  const [curPage, serCurPage] = useState("home");

  const handleChangePage = (page) => {
    setCurPage(page);
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
