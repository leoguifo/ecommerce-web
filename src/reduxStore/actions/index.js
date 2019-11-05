import { UPDATE_CART, ADD_ITEM_TO_CART, REMOVE_CART_ITEM } from './actionTypes';
import Utils from '../../Utils';

export const updateCart = () => {
    return (dispatch, getState) => {
        let { cartState } = getState();
        let total = 0;

        cartState.itens.map((item) => {
            total += item.preco;
        });

        dispatch({
            type: UPDATE_CART,
            itensCounter: cartState.itens.length,
            total: total
        });
    }
};

export const addItemToCart = produto => {
    return (dispatch) => {
        Utils.toast('Item adicionado ao carrinho');
        dispatch({
            type: ADD_ITEM_TO_CART,
            produtoToPush: produto,
        });
        dispatch(updateCart());
    }
};

export const removeCartItem = keyItem => {
    return (dispatch) => {
        Utils.toast('Item removido ao carrinho');
        dispatch({
            type: REMOVE_CART_ITEM,
            keyItem
        });
        dispatch(updateCart());
    }
};