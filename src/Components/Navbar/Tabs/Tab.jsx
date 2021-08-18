import React from 'react';
import classes from './tab.css';

const Tab = props => {
    const iconClass = `material-icons ${classes.icons}`;
    return (
        <>
            <div className='d-inline'>
                <span className={iconClass} onClick={props.onClickCart}>shopping_bag</span>
                <span className={classes.counter} onClick={props.onClickCart} >{props.cartLength}</span>
            </div>
            <div className='d-inline'>
                <span className={iconClass} onClick={props.onClickWishlist}>favorite</span>
                <span className={classes.counter} onClick={props.onClickWishlist}>{props.wishlistLength}</span>
            </div>
        </>
    )
}

export default Tab;