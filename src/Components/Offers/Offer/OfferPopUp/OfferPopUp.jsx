import React, {useState} from 'react';
import classes from './OfferPopUp.css';
import Radium, {StyleRoot} from 'radium';
import { fadeIn, fadeInDown } from 'react-animations';

const anims = {
    fade: {
        animation: 'x 0.8s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

const OfferPopUp = ({click, info, addToCart}) => {
    const [selections, setSelections] = useState({color: 'black', size: 'M', quantity: 1, item: info});
    const sizes = ['XS', 'S', 'M', 'L'];

    const qtyRemove = () => { 
        let qty = selections.quantity - 1;
        if(qty)
            return setSelections({...selections, quantity: qty });
        else
            return null;
    };
    const qtyAdd = () => {let qty = selections.quantity + 1; return setSelections({...selections, quantity: qty })};

    return (
        <div className={classes.overlay} onClick={click}>
        <StyleRoot>
        <div style={anims.fade} className={classes.wrapper} onClick={(e) => e.stopPropagation()}>
            <div className="row my-1 text-end">
                <span className={classes.icon.concat(" material-icons")} onClick={click}>clear</span>
            </div>
            <hr className="my-0"/>
            <div className={classes.c.concat(" row mt-3 mx-2 mb-3 justify-content-center")}>
                <div className={classes.imgC.concat(" col-sm-12 col-md-6 col-lg-4")}>
                    <img className={classes.img.concat(' img-fluid')} src={info.img} alt={info.title} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8 text-start">
                    <h2>{info.title}</h2>
                    <span className={classes.price}>{info.price}$ {info.oldPrice !== 0 ? <span className={classes.oldPrice}>{info.oldPrice}$</span> : null}</span>
                    <p className={classes.none}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat eos tenetur repellat voluptatibus aut iure, excepturi exercitationem sunt delectus voluptate obcaecati officia, atque iusto consequuntur temporibus qui autem, mollitia amet?</p>
                    <span className={classes.none}>Categories: {info.categories.map((cat, i) => (<span key={i}> {cat}</span>))}</span><br />
                    <span className={classes.none}>Details: {info.description}</span>
                    <hr />
                    <div className="row justify-content-start">
                        <div className="col-sm-6 col-lg-4 d-block mt-2">
                            <span>Select Color:</span>
                            <div className="d-flex">
                                {info.colors.map(color => (
                                <div 
                                key={color}
                                onClick={() => setSelections({...selections, color})}
                                style={{backgroundColor: color}} 
                                className={selections.color === color ? `${classes.color} ${classes.colorActive}` : classes.color} />))} 
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 d-block mt-2">
                            <span>Select Size:</span>
                            <div className="d-flex">
                                {sizes.map(size => (
                                    <div key={size}
                                    onClick={() => setSelections({...selections, size})}
                                    className={selections.size === size ? `${classes.size} ${classes.sizeActive}` : classes.size}>
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 d-block mt-2">
                            <span className="d-block">Quantity:</span>
                            <div className={classes.quantity}>
                            <span className={classes.icons.concat(" material-icons")} onClick={qtyRemove}>remove</span>
                            <span className="px-2">{selections.quantity}</span>
                            <span className={classes.icons.concat(" material-icons")} onClick={qtyAdd}>add</span>
                        </div> 
                    </div>
                    <div className="row mt-4">
                        <button onClick={addToCart.bind(this, selections)} className={classes.btn}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </StyleRoot>
        </div>
    )
}

export default OfferPopUp;