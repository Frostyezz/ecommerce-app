import React, {useState} from 'react';
import classes from './Features.css';
import Radium, {StyleRoot} from 'radium';
import { tada } from 'react-animations';



const Features = () => {
    const cols = [{
        icon: 'local_shipping',
        title: 'Free Shipping'
    },
    {
        icon: 'support_agent',
        title: 'Support 24/7'
    },
    {
        icon: 'payments',
        title: 'Money Returns'
    },
    {
        icon: 'local_offer',
        title: 'Order Discounts'
    }
]
    const anims = {
        tada: {
            animation: 'x 1s',
            animationName: Radium.keyframes(tada, 'tada')
        }
    };
    const iconClass = `material-icons ${classes.icons}`;
    const [hovering, setHovering] = useState(-1);
    return (
        <StyleRoot>
        <div className={classes.shadow.concat(" container-fluid bg-white")}>
            <div className="row justify-content-md-center text-center">
                {cols.map((el, i) => (
                    <div className="col-sm-12 col-md-2 py-5"
                    key={i} 
                    onMouseEnter={() => setHovering(i)} 
                    onMouseLeave={() => setHovering(-1)}
                    style={hovering === i ? anims.tada : null}>
                        <span className={iconClass}>{el.icon}</span>
                        <h3>{el.title}</h3>
                    </div>
                ))}
            </div>
        </div>
        </StyleRoot>
    )
}

export default Features;