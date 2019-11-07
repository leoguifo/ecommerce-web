import { SET_LOADED_PRODUTOS, ON_LOAD_PRODUTOS } from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
    produtos: [],
    onLoad: true
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
                    $set: action.produtos.map((item) => {
                        return {
                            sku: item.sku,
                            nome: item.nome,
                            descricao: "Sem descrição",
                            preco: item.preco,
                            imagem: "https://materializecss.com/images/sample-1.jpg"
                        };
                    })
                }
            });
        default:
            return state;
    }
};