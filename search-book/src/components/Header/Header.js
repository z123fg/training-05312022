import "./Header.css";
import { Link } from "react-router-dom";
import MyLink from "../../router-demo/MyLink";
const Header = ({ handleChangePage }) => {
  //home, wishlist
  return (
    <header className="header">
      <div className="banner">
        <h3>Book Search</h3>
      </div>
      <div className="nav__container">
        <MyLink to="/home">Home</MyLink>
        <MyLink to="/wishlist">Wishlist</MyLink>
       {/*  <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleChangePage("home");
                    }}
                >
                    Home
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleChangePage("wishlist");
                    }}
                >
                    Wishlist
                </button> */}
      </div>
    </header>
  );
};

export default Header;
