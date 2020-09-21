/**
 * defines the operations that can be applied to the cart
 */

export const ADD_ITEM = 'ADD_ITEM';

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const REMOVE_ALL = 'REMOVE_ALL';

export function addItem(item) {
    return {
        type: ADD_ITEM,
        item
    }
}

export function removeItem(item) {
    return {
        type: REMOVE_ITEM,
        item
    }
}

export function removeAll() {
    return {
        type: REMOVE_ALL,
        item: null
    }
}