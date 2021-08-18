import React, {useState} from 'react';
import classes from './Navbar.css';
import Tab from './Tabs/Tab';
import CartPopUp from './CartPopUp/CartPopUp';
import WishlistPopUp from './WishlistPopUp/WishlistPopUp';

const Navbar = ({cartItems, removeFromCart, wishlistItems, removeFromWishlist, addToCart}) => {
    const [tabState, setTabState] = useState({ cart: false, wishlist: false });
    const toggleCart = () =>  tabState.wishlist ? setTabState({cart: !tabState.cart, wishlist: false}) : setTabState({...tabState, cart: !tabState.cart})
    const toggleWishlist = () =>  tabState.cart ? setTabState({cart: false, wishlist: !tabState.wishlist}) : setTabState({...tabState, wishlist: !tabState.wishlist})

    const navClass = `container-fluid row fixed-top ${classes.navbar}`;
    return (
    <nav className={navClass}>
        <div className="col-4">
            <b className={classes.logo}>Frost.</b>
        </div>
        <div className="col-8 text-end">
            <CartPopUp cartItems={cartItems} removeFromCart={removeFromCart} clicked={tabState.cart} onClick={toggleCart}/>
            <WishlistPopUp addToCart={addToCart} wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} clicked={tabState.wishlist} onClick={toggleWishlist} />
            <Tab cartLength={cartItems.length} wishlistLength={wishlistItems.length} onClickCart={toggleCart} onClickWishlist={toggleWishlist}/>
        </div>
        
    </nav>
    )
}

export default Navbar;