import { RECEIVE_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../actions";

const initialState = { products: [] };
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      console.log(action);
      return action.products;

    case ADD_PRODUCT:
      return [...state.concat(action.payload)];

    case DELETE_PRODUCT:
      return [...action.payload];

    case UPDATE_PRODUCT:
        debugger;
        return{
            ...state.map((product) => {
                if(product.id === action.payload.id){
                    return{
                        productName: action.payload.productName,
                        price: action.payload.price,
                        type: action.payload.type
                    }
                }
            })
        }

    default:
      return state;
  }
}
