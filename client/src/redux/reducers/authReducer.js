/**
 * handles signning the user in and out
 */

import { LOGIN, LOGOUT } from '../actions/authActions';

// try to get the auth info from the browser's cache
let defaultState = localStorage.getItem('auth');

export default function authState(state = defaultState, action) {
    switch (action.type) {
        case LOGIN:
            state = {
                ...action.userInfo
            }
            localStorage.setItem('auth', state)
            break
        case LOGOUT:
            state = null;
            localStorage.removeItem('auth');
            break;
        default:
            break;
    }

    return state;
}