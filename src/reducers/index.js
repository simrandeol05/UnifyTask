
import {combineReducers} from 'redux';
import product from './productReducer';
import products from './productsReducer';

export default combineReducers({
    products: products,
    product: product,
});