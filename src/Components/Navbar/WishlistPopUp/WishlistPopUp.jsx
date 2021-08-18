import React from 'react';
import classes from './WishlistPopUp.css';
import Radium, {StyleRoot} from 'radium';
import { fadeIn } from 'react-animations';
import WishlistItems from './WishlistItems/WishlistItems';

const WishlistPopUp = ({clicked, onClick, wishlistItems, removeFromWishlist, addToCart}) => {
    const anims = {
        fade: {
            animation: 'x 1s',
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
        }
    };

    const wishlist =  <StyleRoot>
    <div style={anims.fade} className={classes.wrapper.concat(" pb-2")}>    
        <div className="row">
            <div className="col-9 text-start px-5">
                <h4 className="pt-4">Your Wishlist</h4>
            </div>
            <div className="col text-end">
            <span onClick={onClick} className={classes.icons.concat(' material-icons')}>close</span>
            </div>
        </div>
        <hr className="my-0" />
        <WishlistItems addToCart={addToCart} wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist}/>
        
        
    </div> 
    </StyleRoot>
    if(clicked)
        return wishlist;
    return null;
}

export default WishlistPopUp;