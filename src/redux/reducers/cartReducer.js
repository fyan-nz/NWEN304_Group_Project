/**
 * handles adding and removing items from the cart
 */
import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL } from '../actions/cartActions';

export default function cartState(state = [], action) {
    switch (action.type) {
        case ADD_ITEM:
            state = [...state, action.item]
            return state;
        case REMOVE_ITEM:
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.item.id) {
                    state.splice(i, 1);
                    return state;
                }
            }
            break;
        case REMOVE_ALL:
            state = [];
            return state;
        default:
            return state;
    }
}