import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.css';
import Tab from './Tabs/Tab';
import CartPopUp from './CartPopUp/CartPopUp';
import WishlistPopUp from './WishlistPopUp/WishlistPopUp';
import MenuPopUp from './MenuPopUp/MenuPopUp';

const Navbar = ({cartItems, removeFromCart, wishlistItems, removeFromWishlist, addToCart}) => {
    const [tabState, setTabState] = useState({ cart: false, wishlist: false, menu: false });
    const toggleCart = () =>  setTabState({cart: !tabState.cart, wishlist: false, menu: false})
    const toggleWishlist = () =>  setTabState({cart: false, wishlist: !tabState.wishlist, menu: false})
    const toggleMenu = () =>  setTabState({menu: !tabState.menu, wishlist: false, cart: false}) 

    const navClass = `container-fluid row fixed-top ${classes.navbar}`;
    return (
    <nav className={navClass}>
        <div className="col-4">
            <Link className={classes.logo} to='/'><b>Frost.</b></Link>
        </div>
        <div className="col-8 text-end">
            <CartPopUp cartItems={cartItems} removeFromCart={removeFromCart} clicked={tabState.cart} onClick={toggleCart}/>
            <WishlistPopUp addToCart={addToCart} wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} clicked={tabState.wishlist} onClick={toggleWishlist} />
            <MenuPopUp clicked={tabState.menu} onClick={toggleMenu}/>
            <Tab cartLength={cartItems.length} wishlistLength={wishlistItems.length} onClickMenu={toggleMenu} onClickCart={toggleCart} onClickWishlist={toggleWishlist}/>
        </div>
        
    </nav>
    )
}

export default Navbar;