const Header = (handleChangePage) => {
    
    //home, wishlist
    return (
        <header>
            <a href="#" onClick={e=>{e.preventDefault(); handleChangePage("home")}}>Home</a>
            <a href="#" onClick={e=>{e.preventDefault(); handleChangePage("wishlist")}}>Wishlist</a>
        </header>
    )
}