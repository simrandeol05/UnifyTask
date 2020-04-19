
import {RECEIVE_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT} from "../actions";

const initialState = {products:[]}
export default function productsReducer(state=initialState, action){
    switch (action.type) {
        
        case RECEIVE_PRODUCTS:
            return action.products
        
        case ADD_PRODUCT:
            return{
                ...state,
                products: state.concat(action.payload)
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.filter(product => product.id !== action.payload.id
)
            }
    
        default:
            return state;
    }
}