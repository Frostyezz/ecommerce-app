import React from 'react';
import { useSelector } from 'react-redux';
import Offer from './Offer/Offer';
import Radium, {StyleRoot} from 'radium';
import { fadeIn } from 'react-animations';
import classes from './Offers.css';

const anims = {
    fade: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

const Offers = ({addToCart, addToWishlist, criteria, resetFilters}) => {
    let products = useSelector((state) => state.products);
    const fetched = products;
    const loading = (<div className="spinner-grow text-primary d-block m-auto my-5" role="status"><span className="visually-hidden">Loading...</span></div>);
    let sorted = [];
    let found1 = true;
    if(criteria.categories.length)
    {
        found1 = false;
        for(let i = 0; i < products.length; ++i)  
            if(criteria.categories.every(tag => products[i].categories.includes(tag)))
                {
                    sorted.push(products[i]);
                    found1 = true;
                }
        products = sorted;
    }
    //if(criteria.price === 'Default') products.sort(() => Math.random() - 0.5);
    if(criteria.price === 'Low to High')
        products.sort((a,b) => {return a.price - b.price});
        else if(criteria.price === 'High to Low') 
            products.sort((a,b) => {return b.price - a.price});
    
    let found = false;
    const productsList = products.map((product) => {
        if(criteria.search)
            {
                if(product.title.toLowerCase().includes(criteria.search.toLowerCase()))
                    {
                        found = true;
                        return <Offer addToWishlist={addToWishlist} addToCart={addToCart} key={product._id} info={product}/>
                    }
            }
        else {found=true; return <Offer addToWishlist={addToWishlist} addToCart={addToCart} key={product._id} info={product}/>}
    })
    return (
        <StyleRoot>
        <div style={anims.fade} className="container mb-5">
            {fetched.length ? 
            <>
            {found && found1 ? 
            <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 justify-content-center">
                {productsList}
            </div> : <div className={classes.reset}>
            <h2 className="text-center mt-5 mb-4">There are no items matching your search!</h2>
            <button onClick={resetFilters} className={classes.btn}>RESET FILTERS</button>
            </div>}
            </>: loading}
        </div>
        </StyleRoot>
    )
}

export default Offers;