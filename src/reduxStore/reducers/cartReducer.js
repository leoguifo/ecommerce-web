import update from 'immutability-helper';
import { UPDATE_CART, ADD_ITEM_TO_CART, REMOVE_CART_ITEM } from '../actions/actionTypes';

const initialState = {
    itens: [],
    total: 0,
    itensCounter: 0
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CART:
            return update(state, {
                itensCounter: {
                    $set: action.itensCounter
                },
                total: {
                    $set: action.total
                }
            });
        case ADD_ITEM_TO_CART:
            return update(state, {
                itens: {
                    $push: [action.produtoToPush]
                }
            });
        case REMOVE_CART_ITEM:
            return update(state, {
                itens: {
                    $splice: [[action.keyItem, 1]]
                }
            });
        default:
            return state;
    }
};