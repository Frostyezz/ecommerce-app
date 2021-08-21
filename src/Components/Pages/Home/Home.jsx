import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { getDeals, getSellers, getArrivals } from '../../../actions/products';

import classes from './Home.css';
import Header from '../../Header/Header';
import Features from '../../Features/Features';
import Offers from '../../Offers/Offers';
const Home = ({addToCart, addToWishlist}) => {
    useEffect(() => {window.scroll(0, 0)}, []);

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
    return (
    <>
        <Header />
        <Features />
        <div id="offers" className={classes.headingContainer}>
            <h1 className={offers === 'sellers' ? classes.headingActive : classes.heading} onClick={() => setOffers('sellers')}>Best Sellers</h1>
            <h1 className={offers === 'deals' ? classes.headingActive : classes.heading} onClick={() => setOffers('deals')}>Daily Deals</h1>
            <h1 className={offers === 'arrivals' ? classes.headingActive : classes.heading} onClick={() => setOffers('arrivals')}>New Arrivals</h1>
        </div>
        <Offers addToCart={addToCart} addToWishlist={addToWishlist}/>
    </>
    )
}

export default Home;