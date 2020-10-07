/**
 * handles adding and removing items from the cart
 */
import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL } from '../actions/cartActions';

let defaultState = [];
// check if there are any cached cart items
const cachedCartItems = localStorage.getItem('cart');

if (cachedCartItems) {
    // set the default state to include those cart items
    defaultState = JSON.parse(cachedCartItems);
}

export default function cartState(state = defaultState, action) {
    switch (action.type) {
        case ADD_ITEM:
            state = [...state, action.item]
            break
        case REMOVE_ITEM:
            state = state.filter(item => item.id !== action.item.id);
            break;
        case REMOVE_ALL:
            state = [];
            break;
        default:
            break;
    }

    // update the current cache with the new state
    localStorage.setItem('cart', JSON.stringify(state));
    return state;
}