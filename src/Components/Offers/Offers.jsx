import React from 'react';
import { useSelector } from 'react-redux';
import Offer from './Offer/Offer';
import Radium, {StyleRoot} from 'radium';
import { fadeIn } from 'react-animations';

const anims = {
    fade: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

const Offers = ({addToCart, addToWishlist}) => {
    const products = useSelector((state) => state.products);
    const loading = (<div className="spinner-grow text-primary" role="status"><span className="visually-hidden">Loading...</span></div>);
    const productsList = products.map((product) => <Offer addToWishlist={addToWishlist} addToCart={addToCart} key={product._id} info={product}/>);
    return (
        <StyleRoot>
        <div style={anims.fade} className="container mb-5">
            <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 justify-content-center">
                {products.length ? productsList : loading}
            </div>
        </div>
        </StyleRoot>
    )
}

export default Offers;