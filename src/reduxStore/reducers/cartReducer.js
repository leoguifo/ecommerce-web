import update from 'immutability-helper';
import { ADD_ITEM_TO_CART } from '../actions/actionTypes';

const initialState = {
    codigo: "132",
    itens: [{
        sku: "321",
        nome: "Teste",
        descricao: "Produto é assim, assim e assado",
        preco: "10",
        imagem: "https://materializecss.com/images/sample-1.jpg"
    }],
    total: "double",
    itensCounter: 1
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return update(state, {
                itens: {
                    $push: [action.value]
                }
            });
    }

    return state;
};