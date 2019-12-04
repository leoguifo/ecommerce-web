import { SET_LOADED_PRODUTOS, ON_LOAD_PRODUTOS, SET_CATEGORY } from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
    produtos: [],
    onLoad: true,
    categorias: [],
    categoria: ""
};

export const produtoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_LOAD_PRODUTOS:
            return update(state, {
                onLoad: {
                    $set: action.value
                }
            });
        case SET_LOADED_PRODUTOS:
            return update(state, {
                produtos: {
                    $set: action.produtos,
                },
                categorias: {
                    $set: action.produtos.map((item) => {
                        return item.categoria;
                    }).filter((cat, index, self) => {
                        return self.indexOf(cat) === index;
                    })
                }
            });
        case SET_CATEGORY:
            return update(state, {
                categoria: {
                    $set: action.value
                }
            });
        default:
            return state;
    }
};