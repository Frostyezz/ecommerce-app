import React from 'react';
import classes from './CartItem.css';

const CartItem = ({item, removeFromCart}) => {

    return (
        <div className={classes.item}>
            <img className={classes.img} src={item.item.img} alt="" />
            <div className={classes.info}>
                <h4>{item.item.title}</h4>
                <span>Color: {item.color}</span>
                <br />
                <span>Size: {item.size}</span>
            </div>
            <div className={classes.price}>
            <span onClick={removeFromCart.bind(this, item.item._id)} className={classes.icons.concat(' material-icons')}>highlight_off</span>
                <h4>{(item.item.price * item.quantity).toFixed(2)}$</h4>
                <span>Quantity: {item.quantity}</span>
            </div>
        </div>
    )
}

export default CartItem;