import * as types from "../constants/actionTypes";
import localhost from "../apis/localhost";

import history from "../history";

export const fetchProducts = () => (dispatch) => {
    localhost
        .get("/products")
        .then((res) => {
            dispatch({ type: types.FETCH_PRODUCTS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: types.FETCH_PRODUCTS_ERROR, payload: err });
        });
};

export const fetchProduct = (id) => (dispatch) => {
    localhost
        .get(`/products/${id}`)
        .then((res) => {
            dispatch({ type: types.FETCH_PRODUCT, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: types.FETCH_PRODUCT_ERROR, payload: err });
        });
};

export const createProduct = (product) => (dispatch) => {
    localhost
        .post("/products", product)
        .then((res) => {
            dispatch({ type: types.CREATE_PRODUCT, payload: res.data });
            history.push("/products");
        })
        .catch((err) => {
            dispatch({ type: types.CREATE_PRODUCT_ERROR, payload: err });
        });
};

export const updateProduct = (id, product) => (dispatch) => {
    localhost
        .patch(`/products/${id}`, product)
        .then((res) => {
            dispatch({ type: types.UPDATE_PRODUCT, payload: res.data });
            history.push("/products");
        })
        .catch((err) => {
            dispatch({ type: types.UPDATE_PRODUCT_ERROR, payload: err });
        });
};

export const deleteProduct = (id, product) => (dispatch) => {
    localhost
        .delete(`/products/${id}`, product)
        .then(() => {
            dispatch({ type: types.DELETE_PRODUCT, payload: id });
            history.push("/products");
        })
        .catch((err) => {
            dispatch({ type: types.DELETE_PRODUCT_ERROR, payload: err });
        });
};
