export default (products = [], action) => {
    switch (action.type) {
        case 'FETCH_DEALS':
            return action.payload;
        case 'FETCH_SELLERS':
            return action.payload;
        case 'FETCH_ARRIVALS':
            return action.payload;
        default:
            return products;
    }
}