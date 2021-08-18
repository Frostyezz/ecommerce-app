import React from 'react';
import classes from './WishlistItems.css';
import WishlistItem from './WishlistItem/WishlistItem';

const WishlistItems = ({wishlistItems, removeFromWishlist, addToCart}) => {
    return (
        <div className={classes.wrapper}>
            {wishlistItems.length ? wishlistItems.map(item => <WishlistItem addToCart={addToCart} removeFromWishlist={removeFromWishlist} key={item._id} item={item} />) : 
            <div className="row text-center mt-4">
                <h3>You currently have no items in your wishlist!</h3>
            </div> }
        </div>
    )
}

export default WishlistItems;