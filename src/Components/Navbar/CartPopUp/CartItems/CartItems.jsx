import React from 'react';
import classes from './CartItems.css';
import CartItem from './CartItem/CartItem';

const CartItems = ({cartItems, removeFromCart}) => {
    return (
        <div className={classes.wrapper}>
            {cartItems.length ? cartItems.map(item => <CartItem removeFromCart={removeFromCart} key={item.item._id} item={item} />) : 
            <div className="row text-center mt-4">
                <h3>You currently have no items in your cart!</h3>
            </div> }
        </div>
    )
}

export default CartItems;