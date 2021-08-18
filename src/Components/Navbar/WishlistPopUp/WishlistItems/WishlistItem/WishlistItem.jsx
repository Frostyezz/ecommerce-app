import React, {useState} from 'react';
import classes from './WishlistItem.css';
import OfferPopUp from '../../../../Offers/Offer/OfferPopUp/OfferPopUp';

const WishlistItem = ({item, removeFromWishlist, addToCart}) => {
    const [clicked, setClicked] = useState(false);

    return (
        <>
        <div className={classes.fix}>
        {clicked ? <OfferPopUp click={() => setClicked(!clicked)} info={item} addToCart={addToCart} /> : null}
        </div>
        <div className={classes.item}>
            <img className={classes.img} src={item.img} alt="" />
            <div className={classes.info}>
                <h4>{item.title}</h4>
                <h4>{item.price}$</h4>
            </div>
            <div className={classes.price}>
            <span onClick={removeFromWishlist.bind(this, item._id)} className={classes.icons.concat(' material-icons mb-2')}>highlight_off</span>
            <span onClick={() => setClicked(!clicked)} className={classes.icons.concat(" material-icons")}>add_circle_outline</span>
            </div>
        </div>
        </>
    )
}

export default WishlistItem;