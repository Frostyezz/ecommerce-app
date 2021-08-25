import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CartPopUp.css';
import Radium, {StyleRoot} from 'radium';
import { fadeIn } from 'react-animations';
import CartItems from './CartItems/CartItems';

const CartPopUp = ({clicked, onClick, cartItems, removeFromCart}) => {
    const anims = {
        fade: {
            animation: 'x 1s',
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
        }
    };

    let total = 0;
    for( let item of cartItems)
        total = total + (item.item.price * item.quantity);
    total = total.toFixed(2); 

    const cart =  <StyleRoot>
    <div style={anims.fade} className={classes.wrapper}>    
        <div className="row">
            <div className="col-9 text-start px-5">
                <h4 className="pt-4">Your Cart</h4>
            </div>
            <div className="col text-end">
            <span onClick={onClick} className={classes.icons.concat(' material-icons')}>close</span>
            </div>
        </div>
        <hr className="my-0" />
        <CartItems removeFromCart={removeFromCart} cartItems={cartItems}/>
        <hr className="mb-0" />
        <div className="row">
            <div className="col text-start ml-5">
                <span className={classes.total}>Total:</span>
            </div>
            <div className="col text-end">
                <span className={classes.total}>{total}$</span>
            </div>
        </div>
        <div className="row w-100 text-center">
            <div className="col-sm-12 col-md-6 pb-3">
                <Link to="/checkout" className={classes.btn}>Checkout</Link>
            </div>
            <div className="col-sm-12 col-md-6 pb-3">
                <Link to="/cart" className={classes.btn}>View Cart</Link>
            </div>
        </div>
        
    </div> 
    </StyleRoot>
    if(clicked)
        return cart;
    return null;
}

export default CartPopUp;