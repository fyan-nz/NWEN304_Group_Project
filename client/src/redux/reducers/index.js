/**
 * combines reducers into a single root reducer
 */
import CartReducer from './cartReducer';
import AuthReducer from './authReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    cart: CartReducer,
    auth: AuthReducer
});