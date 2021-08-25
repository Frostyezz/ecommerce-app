import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getAll } from '../../../actions/products';
import Offers from '../../Offers/Offers';
import classes from './Items.css'

const Items = ({addToCart, addToWishlist, tags, title}) => {
    useEffect(() => {window.scroll(0, 0)}, [tags]);
    useEffect(() => setCriteria({...criteria, categories: tags}), [tags]);

    const [criteria, setCriteria] = useState({
        search: '',
        price: 'Default',
        categories: tags
    });

    const dispatch = useDispatch();
    useEffect(() => dispatch(getAll()), [dispatch, criteria.categories]);

    const resetFilters = () => setCriteria({
        search: '',
        price: 'Default',
        categories: []
    });

    const toggleCategory = tag =>{
    let tags = criteria.categories;
    tags.includes(tag) ? tags.splice(tags.indexOf(tag), 1) : tags.push(tag);
    setCriteria({...criteria, categories: tags})};

    return (
        <>
            <div className="container text-center my-5">
                <h1>{title} items</h1>
            </div>
            <div className={classes.options.concat(" row bg-white justify-content-center my-5 py-2 mx-0")}>
                <div className={classes.searchContainer.concat(" col-auto m-2")}>
                    <span className={classes.searchIcon.concat(' material-icons')}>search</span>
                    <input value={criteria.search} onChange={(e) => setCriteria({...criteria, search: e.target.value})}  type="text" className={classes.search} placeholder="Search items"/>
                </div>
                <div className="col-auto m-2">
                    <div className="dropdown">
                        <button className={classes.Dropdown.concat(" dropdown-toggle")} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by Price: {criteria.price}
                        </button>
                        <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                            <li className={ criteria.price === 'Default' ? "dropdown-item active" : "dropdown-item"}
                            style={{cursor: 'pointer'}}
                            onClick={() => setCriteria({...criteria, price: 'Default'})}>Default</li>
                            <li className={ criteria.price === 'Low to High' ? "dropdown-item active" : "dropdown-item"}
                            style={{cursor: 'pointer'}}
                            onClick={() => setCriteria({...criteria, price: 'Low to High'})}>Low to High</li>
                            <li className={ criteria.price === 'High to Low' ? "dropdown-item active" : "dropdown-item"}
                            style={{cursor: 'pointer'}}
                            onClick={() => setCriteria({...criteria, price: 'High to Low'})}>High to Low</li>
                        </ul>
                    </div>
                </div>
                <div className=" col-auto my-2">
                    <button className={classes.categories.concat(" accordion-button collapsed")} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Categories  
                    </button>
                </div>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <hr />
                    <div class={classes.tagContainer.concat(" container accordion-body")}>
                        <span className={criteria.categories.includes('Men') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Men')} >Men</span>
                        <span className={criteria.categories.includes('Women') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Women')}>Women</span>
                        <span className={criteria.categories.includes('Summer') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Summer')}>Summer</span>
                        <span className={criteria.categories.includes('Winter') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Winter')}>Winter</span>
                        <span className={criteria.categories.includes('Sale') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Sale')}>Sale</span>
                        <span className={criteria.categories.includes('New') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'New')}>New</span>
                        <span className={criteria.categories.includes('Accessories') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Accessories')}>Accessories</span>
                        <span className={criteria.categories.includes('T-Shirt') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'T-Shirt')}>T-Shirt</span>
                        <span className={criteria.categories.includes('Blouse') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Blouse')}>Blouse</span>
                        <span className={criteria.categories.includes('Jacket') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Jacket')}>Jacket</span>
                        <span className={criteria.categories.includes('Hoodie') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Hoodie')}>Hoodie</span>
                        <span className={criteria.categories.includes('Turtleneck') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Turtleneck')}>Turtleneck</span>
                        <span className={criteria.categories.includes('Shirt') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Shirt')}>Shirt</span>
                        <span className={criteria.categories.includes('Polo Shirt') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Polo Shirt')}>Polo Shirt</span>
                        <span className={criteria.categories.includes('Dress') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Dress')}>Dress</span>
                        <span className={criteria.categories.includes('Shorts') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Shorts')}>Shorts</span>
                        <span className={criteria.categories.includes('Joggers') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Joggers')}>Joggers</span>
                        <span className={criteria.categories.includes('Skirt') ? `${classes.tag} ${classes.tagActive}` : classes.tag}
                        onClick={toggleCategory.bind(this, 'Skirt')}>Skirt</span>
                    </div>
                </div>
            </div>
            <Offers resetFilters={resetFilters} criteria={criteria} addToCart={addToCart} addToWishlist={addToWishlist}/>
        </>
    )
}

export default Items;