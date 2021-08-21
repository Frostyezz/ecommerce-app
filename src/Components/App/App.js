import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../Pages/Home/Home';
import Items from '../Pages/Items/Items';
import NotFound from '../Pages/NotFound/NotFound';

import classes from './App.css';

const App = () => {

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
    <BrowserRouter>
    <div className="App">
      <Navbar 
      cartItems={cartItems.items} 
      wishlistItems={wishlistItems.items} 
      removeFromWishlist={removeFromWishlist} 
      removeFromCart={removeFromCart}
      addToCart={addToCart}/>
      <Switch>
        <Route path="/" exact render={() => <Home addToCart={addToCart} addToWishlist={addToWishlist}/>}/>
        <Route path="/items" render={() => <Items addToCart={addToCart} addToWishlist={addToWishlist}/>}/>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
