import { ADD_ITEM_TO_CART } from './actionTypes';
import Utils from '../../Utils';

export const addItemToCart = value => {
    Utils.toast('Item adicionado ao carrinho');
    return ({
        type: ADD_ITEM_TO_CART,
        value: value
    })
};