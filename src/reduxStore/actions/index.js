import { UPDATE_CART, ADD_ITEM_TO_CART, REMOVE_CART_ITEM, SET_LOADED_PRODUTOS, ON_LOAD_PRODUTOS, ON_LOGIN, SET_CATEGORY, SET_LOGGED } from './actionTypes';
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
                    produtos.push(doc.data());
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

export const registerLogin = credentials => {

    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password).catch(function (error) {
            // Handle Errors here.
            if (!error) {
                dispatch(onLogin(credentials));
            } else {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }

                console.log(error);
            }
            // ...
        });

    }
}

export const onLogin = credentials => {
    return (dispatch) => {

        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).catch(function (error) {
            // Handle Errors here.
            if (!error) {
                dispatch(({
                    type: ON_LOGIN,
                    value: true
                }))
            } else {

                var errorCode = error.code;
                var errorMessage = error.message;

                dispatch(({
                    type: ON_LOGIN,
                    value: false,
                    error: errorMessage
                }))

                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            }
            // ...
        });
    }
}

export const setCategory = value => {
    return({
        type: SET_CATEGORY,
        value
    })
}

export const setLogged = value => {
    return({
        type: SET_LOGGED,
        value
    });
}