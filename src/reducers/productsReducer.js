import { RECEIVE_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from "../actions";

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

    default:
      return state;
  }
}
