import * as types from "../constants/actionTypes";

const INITIAL_STATE = {
    fetchProducts: null,
    fetchProduct: null,
    createProduct: null,
    deleteProduct: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS_ERROR:
            return { ...state, fetchProducts: action.payload };
        case types.FETCH_PRODUCT_ERROR:
            return { ...state, fetchProduct: action.payload };
        case types.CREATE_PRODUCT_ERROR:
            return { ...state, createProduct: action.payload };
        case types.DELETE_PRODUCT_ERROR:
            return { ...state, deleteProduct: action.payload };
        default:
            return state;
    }
};
