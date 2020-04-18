
import axios from 'axios';

export const RECEIVE_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';

const apiUrl = "http://localhost:8000/products"; 

const receiveProducts = (data) => ({
    type: RECEIVE_PRODUCTS,
    products: data,
})

export const getProducts = () =>{
    return (dispatch) => {
        return axios.get(apiUrl)
        .then(response => {
            dispatch(receiveProducts(response.data))
        })
        .catch(error => {throw(error);});
    };
};

export const addProduct = ( product ) => {
    return(dispatch) => {
        return axios.post(apiUrl)
            .then(response => {
                let data = response.data;
                dispatch({ type:ADD_PRODUCT, payload: {productName: data.productName, price:data.price, type:data.type}})
            })
            .catch(error => {throw(error) });
    };
};
