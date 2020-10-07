/**
 * defines the operations that can be applied to the user's auth status
 */

export const LOGIN = 'LOGIN';

export const LOGOUT = 'LOGOUT';

export function login(userInfo) {
    return {
        userInfo,
        type: LOGIN
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}