import axios from "axios";

export const RECEIVE_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

const apiUrl = "http://localhost:8000/products";

const receiveProducts = (data) => ({
  type: RECEIVE_PRODUCTS,
  products: data,
});

export const getProducts = () => {
  return (dispatch) => {
    return axios
      .get(apiUrl)
      .then((response) => {
        dispatch(receiveProducts(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const addProduct = (product) => (dispatch) => {
  return axios
    .post(apiUrl, {
      productName: product.productName,
      price: product.price,
      type: product.type,
    })
    .then((response) => {
      let data = response.data;
      dispatch({
        type: ADD_PRODUCT,
        payload: {
          productName: data.productName,
          price: data.price,
          type: data.type,
          id: data.id,
        },
      });
    })
    .catch((error) =>
      dispatch({
        error,
      })
    );
};

export const deleteProduct = (id, products) => (dispatch) => {
  return axios
    .delete(apiUrl + "/" + id)
    .then((response) => {
      const updatedRecords = products.filter((item) => item.id !== id);

      dispatch({ type: DELETE_PRODUCT, payload: updatedRecords });
    })
    .catch((error) =>
      dispatch({
        error,
      })
    );
};
