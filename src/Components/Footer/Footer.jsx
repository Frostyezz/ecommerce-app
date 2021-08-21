import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link className={classes.a} to="/about">About us</Link>
                    <Link className={classes.a} to="/location">Store location</Link>
                    <Link className={classes.a} to="/contact">Contact</Link>
                    <Link className={classes.a} to="/tracking">Orders tracking</Link>
                </div>
                <div className="col-sm-12 col-md-3 my-4">
                <h4>USEFUL LINKS</h4>
                    <Link className={classes.a} to="/returns">Returns</Link>
                    <Link className={classes.a} to="/support-policy">Support policy</Link>
                    <Link className={classes.a} to="/size-guide">Size guide</Link>
                    <Link className={classes.a} to="/faq">FAQs</Link>
                </div>
                <div className="col-sm-12 col-md-3 my-4">
                <h4>FOLLOW US</h4>
                    <a className={classes.a} href="https://www.facebook.com/">Facebook</a>
                    <a className={classes.a} href="https://www.youtube.com/">Youtube</a>
                    <a className={classes.a} href="https://twitter.com/">Twitter</a>
                    <a className={classes.a} href="https://www.instagram.com/">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;