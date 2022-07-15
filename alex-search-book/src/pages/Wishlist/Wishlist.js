import React from "react"
import {useSelector} from "react-redux"



const Wishlist= () => {
    const wishlist = useSelector((state) => state.wishlist.wishlist); 
    //wishlistResult, pagination
    return (
        <>
        <div><ul>
            {
                wishlist.map(book=>(<li ><BookInfo key={book.id}/></li>))
            }
            </ul>
            </div></>
    )
}

export default Wishlist;