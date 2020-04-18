
import {RECEIVE_PRODUCTS, ADD_PRODUCT} from "../actions";

const initialState = {products:[]}
export default function productsReducer(state=initialState, action){
    switch (action.type) {
        
        case RECEIVE_PRODUCTS:
            return action.products
        
        case ADD_PRODUCT:
            return{
                ...state,
                products: state.products.concat(action.payload)
            };
    
        default:
            return state;
    }
}