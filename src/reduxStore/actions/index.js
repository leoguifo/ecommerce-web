import { UPDATE_CART, ADD_ITEM_TO_CART, REMOVE_CART_ITEM, SET_LOADED_PRODUTOS, ON_LOAD_PRODUTOS } from './actionTypes';
import Utils from '../../Utils';
import firebase from '../../Firebase';

export const setLoadProduto = value => {
    return ({
        type: ON_LOAD_PRODUTOS,
        value
    });
}

export const loadProdutos = () => {
    return (dispatch) => {
        firebase
            .firestore()
            .collection('produtos')
            .get()
            .then((res) => {
                let produtos = [];
                res.forEach((doc) => {
                    produtos.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        sku: doc.data().sku,
                        quantidade: doc.data().quantidade,
                        preco: doc.data().preco
                    });
                });
                dispatch({
                    type: SET_LOADED_PRODUTOS,
                    produtos
                });
                dispatch(setLoadProduto(false));
            });
    }
}

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