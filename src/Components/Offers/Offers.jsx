import React from 'react';
import { useSelector } from 'react-redux';
import Offer from './Offer/Offer';


const Offers = ({addToCart, addToWishlist}) => {
    const products = useSelector((state) => state.products);
    const productsList = products.map((product) => <Offer addToWishlist={addToWishlist} addToCart={addToCart} key={product._id} info={product}/>);
    return (
        <div className="container mb-5">
            <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 justify-content-center">
                {productsList}
            </div>
        </div>
    )
}

export default Offers;