import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './MenuPopUp.css';
import Radium, {StyleRoot} from 'radium';
import { fadeIn } from 'react-animations';

const MenuPopUp = ({clicked, onClick}) => {

    const anims = {
        fade: {
            animation: 'x 1s',
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
        }
    };

    const menu =  <StyleRoot>
    <div style={anims.fade} className={classes.wrapper.concat(" pb-2")}>    
        <div className="row">
            <div className="col-9 text-start px-5">
                <h4 className="pt-4">Menu</h4>
            </div>
            <div className="col text-end">
            <span onClick={onClick} className={classes.icons.concat(' material-icons')}>close</span>
            </div>
        </div>
        <hr className="my-0" />
        <div className="text-start my-2">
            <Link to='/' className={classes.option}>Homepage</Link>
            <Link to='/items' className={classes.option}>All Items</Link>
            <Link to='/sale' className={classes.option}>Sale Items</Link>
            <Link to='/new' className={classes.option}>New Items</Link>
            <Link to='/her' className={classes.option}>For Her</Link>
            <Link to='/him' className={classes.option}>For Him</Link>
        </div>
        
    </div> 
    </StyleRoot>
    if(clicked)
        return menu;
    return null;
}

export default MenuPopUp;