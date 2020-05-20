import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import { reducer as formReducer } from "redux-form";
import errorReducer from "./errorReducer";

export default combineReducers({
    products: productsReducer,
    form: formReducer,
    errors: errorReducer,
});
