import React, {useState} from 'react';
import classes from './Offer.css';
import OfferPopUp from './OfferPopUp/OfferPopUp';
import Radium, {StyleRoot} from 'radium';
import { fadeIn } from 'react-animations';

const anims = {
    fade: {
        animation: 'x 0.8s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

const Offer = props => {
    const { info } = props;
    const [hovered, setHovered] = useState({isHovering: false});
    const [clicked, setClicked] = useState(false);
    let buttons = null;
    if(hovered.isHovering)
        buttons = <StyleRoot>
        <div style={anims.fade} className={classes.buttons}>
            <span onClick={props.addToWishlist.bind(this, info)} className={classes.icon.concat(" material-icons")}>favorite</span>
            <span onClick={() => setClicked(true)} className={classes.options}>Select Option</span>
            <span onClick={() => setClicked(true)} className={classes.icon.concat(" material-icons")}>visibility</span>
        </div>
        </StyleRoot>

    return (
        <div 
        onMouseEnter={() => {setHovered({isHovering: true})}} 
        onMouseLeave={() => {setHovered({isHovering: false})}}
        onTouchStart={() => {setHovered({isHovering: true})}} 
        onTouchMove ={() => {setHovered({isHovering: false})}}
        onTouchCancel ={() => {setHovered({isHovering: false})}}
        className={classes.item.concat(' col mb-3')}>
            <img className={classes.img} src={info.img} alt={info.title} />
            <h3 className="pt-3">{info.title}</h3>
            <span>{info.price}$ {info.oldPrice !== 0 ? <span className={classes.oldPrice}>{info.oldPrice}$</span> : null}</span>
            {buttons}
            {clicked ? <OfferPopUp addToCart={props.addToCart} info={info} click={() => {setClicked(false); setHovered({isHovering: false})}} /> : null}
        </div>
    )
}

export default Offer;