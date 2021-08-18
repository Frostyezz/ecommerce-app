import React from 'react';
import classes from './Footer.css';

const Footer = () => {

    return (
        <div className="container-fluid bg-white">
            <div className="row py-5">
                <div className={classes.logo.concat(" col-sm-12 col-md-3 my-4")}>
                    <h2><b>Frost.</b></h2>
                    <span>© 2021 Frost.</span><br />
                    <span>All Rights Reserved.</span>
                </div>
                <div className="col-sm-12 col-md-3 my-4">
                    <h4>ABOUT US</h4>
                    <a className={classes.a} href="#">About us</a>
                    <a className={classes.a} href="#">Store location</a>
                    <a className={classes.a} href="#">Contact</a>
                    <a className={classes.a} href="#">Orders tracking</a>
                </div>
                <div className="col-sm-12 col-md-3 my-4">
                <h4>USEFUL LINKS</h4>
                    <a className={classes.a} href="#">Returns</a>
                    <a className={classes.a} href="#">Support policy</a>
                    <a className={classes.a} href="#">Size guide</a>
                    <a className={classes.a} href="#">FAQs</a>
                </div>
                <div className="col-sm-12 col-md-3 my-4">
                <h4>FOLLOW US</h4>
                    <a className={classes.a} href="#">Facebook</a>
                    <a className={classes.a} href="#">Youtube</a>
                    <a className={classes.a} href="#">Twitter</a>
                    <a className={classes.a} href="#">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;