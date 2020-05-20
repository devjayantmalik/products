import * as types from "../constants/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return action.payload;
        case types.FETCH_PRODUCT:
            return [...state, action.payload];
        case types.CREATE_PRODUCT:
            return [...state, action.payload];
        case types.DELETE_PRODUCT:
            return state.filter((product) => product.id !== action.payload);
        default:
            return state;
    }
};
