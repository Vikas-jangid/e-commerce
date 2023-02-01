import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { loginReducer } from "./loginReducer";
import { signupReducer } from "./signupReducer";

const rootReducer = combineReducers({
    cartReducer,
    loginReducer,
    signupReducer
});

export default rootReducer;