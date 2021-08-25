import React, {useState, useEffect} from 'react';
import classes from './Header.css';
import Radium, {StyleRoot} from 'radium';
import { fadeInLeft, fadeInRight } from 'react-animations';
import modelImg from '../../assets/imgs/modell.png'
import maleImg from '../../assets/imgs/mann.png'

const anims = {
    fadeLeft: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    fadeInRight: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
    }
}

const Header = () => {
    const [promo, setPromo] = useState(false);
    setTimeout(() => setPromo(!promo), 10000);
    return (
        <div className="container">
             <StyleRoot>
            <div className="row"> 
                <div className="col-sm-12 col-md-8 col-lg-8 py-5">
                    <div className={classes.content}>
                    <h3 style={!promo ? anims.fadeInRight : anims.fadeLeft}>Exclusive Offers</h3>
                    <h1 style={!promo ? anims.fadeInRight : anims.fadeLeft}>{!promo ? 'Summer Collection 2021' : 'Winter Collection 2021'}</h1>
                    <a href='#offers' style={!promo ? anims.fadeInRight : anims.fadeLeft} className={classes.btn}>SHOP NOW</a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <img src={!promo ? modelImg  : maleImg} style={!promo ? anims.fadeInRight : anims.fadeLeft} alt="model" className="img-fluid pt-5" />
                </div>
            </div>
            </StyleRoot>
        </div>
       
    )
}

export default Header;