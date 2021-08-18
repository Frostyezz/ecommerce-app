import axios from 'axios';

const url = 'https://api-frost0.herokuapp.com/products/';

export const fetchDeals = () => axios.get(`${url}deals`);

export const fetchSellers = () => axios.get(`${url}sellers`);

export const fetchArrivals = () => axios.get(`${url}arrivals`);