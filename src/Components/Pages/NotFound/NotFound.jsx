import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import classes from './NotFound.css';

const NotFound = () => {
    useEffect(() => {window.scroll(0, 0)}, []);
    return (
        <div className="container my-5 py-1 text-center">
            <h1 className={classes.title}>404</h1>
            <h2>OPPS! PAGE NOT FOUND</h2>
            <p className="lead py-3">Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</p>
            <Link className={classes.btn} to='/'>BACK TO HOME PAGE</Link>
        </div>
    )
}

export default NotFound;