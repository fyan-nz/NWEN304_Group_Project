/**
 * combines reducers into a single root reducer
 */
import CartReducer from './cartReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    cart: CartReducer
});