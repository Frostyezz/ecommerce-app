import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getDeals, getSellers, getArrivals } from '../../actions/products';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Features from '../Features/Features';
import Offers from '../Offers/Offers';
import Footer from '../Footer/Footer';

import classes from './App.css';

const App = () => {
  const dispatch = useDispatch();

  const [offers, setOffers] = useState('deals');

  useEffect(() => {
    switch (offers) {
      case 'deals':
        return dispatch(getDeals());
      case 'sellers':
        return dispatch(getSellers());
      case 'arrivals':
        return dispatch(getArrivals());
      default:
        return dispatch(getDeals());
    }
    
  }, [dispatch, offers]);

  const [cartItems, setCartItems] = useState({items:[]});
  const addToCart = (item) => {
    let _items = cartItems.items;
    _items.push(item);
    return setCartItems({items: _items})};

  const removeFromCart = (itemId) => {
    for( let i = 0; i < cartItems.items.length; ++i)
        if(cartItems.items[i].item._id === itemId)
          {
            let _items = cartItems.items;
            _items.splice(i, 1);
            return setCartItems({items: _items}); 
          };
  };

  const [wishlistItems, setWishlistItems] = useState({items:[]});
  const addToWishlist = (item) => {
    if(!wishlistItems.items.find(itm => itm._id === item._id)){
      let _items = wishlistItems.items;
     _items.push(item);
      return setWishlistItems({items: _items});}
    return null;}

  const removeFromWishlist = (itemId) => {
    for( let i = 0; i < wishlistItems.items.length; ++i)
        if(wishlistItems.items[i]._id === itemId)
          {
            let _items = wishlistItems.items;
            _items.splice(i, 1);
            return setWishlistItems({items: _items}); 
          };
  };
  
  return (
    <div className="App">
      <Navbar 
      cartItems={cartItems.items} 
      wishlistItems={wishlistItems.items} 
      removeFromWishlist={removeFromWishlist} 
      removeFromCart={removeFromCart}
      addToCart={addToCart}/>
      <Header />
      <Features />
      <div id="offers" className={classes.headingContainer}>
        <h1 className={offers === 'sellers' ? classes.headingActive : classes.heading} onClick={() => setOffers('sellers')}>Best Sellers</h1>
        <h1 className={offers === 'deals' ? classes.headingActive : classes.heading} onClick={() => setOffers('deals')}>Daily Deals</h1>
        <h1 className={offers === 'arrivals' ? classes.headingActive : classes.heading} onClick={() => setOffers('arrivals')}>New Arrivals</h1>
      </div>
      <Offers addToCart={addToCart} addToWishlist={addToWishlist}/>
      <Footer />
    </div>
  );
}

export default App;
