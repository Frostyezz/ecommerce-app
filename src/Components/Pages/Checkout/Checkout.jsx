import React, {useEffect} from 'react';

import classes from './Checkout.css';

const Checkout = ({ cartItems }) => {
    useEffect(() => {window.scroll(0, 0)}, []);
    const {items} = cartItems;
    let total = 0;
    for(let item of items)
        total = total + (item.item.price * item.quantity);
    total = total.toFixed(2); 
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-7 bg-white p-3">
                    <div className="row">
                        <h3>Billing Details</h3>
                        <hr className="mb-0" />
                        <div className="col-md-6 mt-3">
                            <label htmlFor="First">First Name</label>
                            <input className={classes.input} id="First" type="text" />
                        </div>
                        <div className="col-md-6 mt-3">
                            <label htmlFor="Last">Last Name</label>
                            <input className={classes.input} id="Last" type="text" />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="Street">Street Address</label>
                            <input className={classes.input} id="Street" type="text" />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="City">Town / City</label>
                            <input className={classes.input} id="City" type="text" />
                        </div>
                        <div className="col-md-6 mt-3">
                            <label htmlFor="County">State / County</label>
                            <input className={classes.input} id="County" type="text" />
                        </div>
                        <div className="col-md-6 mt-3">
                            <label htmlFor="zip">Postcode / ZIP</label>
                            <input className={classes.input} id="zip" type="text" />
                        </div>
                        <div className="col-md-6 mt-3">
                            <label htmlFor="Email">Email Address</label>
                            <input className={classes.input} id="Email" type="email" />
                        </div>
                        <div className="col-md-6 mt-3">
                            <label htmlFor="phone">Phone</label>
                            <input className={classes.input} id="phone" type="text" />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="notes">Order Notes</label>
                            <textarea className={classes.input} id="notes" type="text" />
                        </div>
                    </div>
                </div>
                <div className={classes.gray.concat(" col p-3")}>
                    <div className="row">
                        <h3>Your Order</h3>
                    </div>
                    <hr className="my-0" />
                    <div className="row p-3 mx-3">
                        <div className="col lead"> <b>Product</b> </div>
                        <div className="col lead text-end"> <b>Price</b> </div>
                        <hr className="my-2" />
                        <div className="d-block">
                        {items.length ? items.map(item => <div className="d-flex">
                            <div className="col lead">{item.item.title} x {item.quantity}</div>
                            <div className="col lead text-end ">{(item.item.price * item.quantity).toFixed(2)}$</div>
                        </div>) : <span className="lead">You have no items to checkout!</span>}
                        </div>
                        <hr className="my-2" />
                        <div className="col lead"> Shipping </div>
                        <div className="col lead text-end"> 0.00$ </div> 
                        <hr className="my-2" />
                        <div className="col lead"> <b>Total</b> </div>
                        <div className="col lead text-end"> <b>{total}$</b> </div> 
                    </div>
                    <div className="container">
                        <button className={classes.btn}>PLACE ORDER</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Checkout;