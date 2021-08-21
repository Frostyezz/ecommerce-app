import * as api from '../api';

export const getDeals = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDeals();
        dispatch({ type: 'FETCH_DEALS', payload: data});
    } catch (error) {
        console.log(error);
    } 
}

export const getSellers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSellers();
        dispatch({ type: 'FETCH_SELLERS', payload: data});
    } catch (error) {
        console.log(error);
    } 
}

export const getArrivals = () => async (dispatch) => {
    try {
        const { data } = await api.fetchArrivals();
        dispatch({ type: 'FETCH_ARRIVALS', payload: data});
    } catch (error) {
        console.log(error);
    } 
}

export const getAll = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAll();
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error);
    } 
}