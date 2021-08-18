import React from 'react';
import classes from './Header.css';
import Radium, {StyleRoot} from 'radium';
import { fadeInLeft } from 'react-animations';
import modelImg from '../../assets/imgs/modell.png'

const anims = {
    fadeLeft: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    }
}

const Header = () => {
    return (
        <div className="container">
             <StyleRoot>
            <div className="row"> 
                <div className="col-sm-12 col-md-8 col-lg-8 py-5">
                    <div className={classes.content}>
                    <h3 style={anims.fadeLeft}>Exclusive Offers</h3>
                    <h1 style={anims.fadeLeft}>Summer Collection 2021</h1>
                    <a href='#offers' style={anims.fadeLeft} className={classes.btn}>SHOP NOW</a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <img src={modelImg} style={anims.fadeLeft} alt="model" className="img-fluid pt-5" />
                </div>
            </div>
            </StyleRoot>
        </div>
       
    )
}

export default Header;