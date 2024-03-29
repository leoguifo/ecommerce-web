import { cartReducer } from '../src/reduxStore/reducers/cartReducer';
import { UPDATE_CART, ADD_ITEM_TO_CART, REMOVE_CART_ITEM } from '../src/reduxStore/actions/actionTypes';

describe('Cart reducer test', () => {

    test('Initial State test', () => {

        let initialState = {};

        initialState = cartReducer(undefined, { type: "" });

        expect({
            codigo: "132",
            itens: [{
                sku: "321",
                nome: "Teste",
                descricao: "Produto é assim, assim e assado",
                preco: 10,
                imagem: "https://materializecss.com/images/sample-1.jpg"
            }],
            total: 10,
            itensCounter: 1
        })
            .toEqual(initialState);

    });

    test('UPDATE_CART test', () => {

        let initialState = {};

        initialState = cartReducer(undefined, {
            type: UPDATE_CART,
            itensCounter: 2,
            total: 100
        });

        expect({
            codigo: "132",
            itens: [{
                sku: "321",
                nome: "Teste",
                descricao: "Produto é assim, assim e assado",
                preco: 10,
                imagem: "https://materializecss.com/images/sample-1.jpg"
            }],
            total: 100,
            itensCounter: 2
        })
            .toEqual(initialState);

    });

    test('ADD_ITEM_TO_CART test', () => {
        let initialState = {};

        initialState = cartReducer(undefined, {
            type: ADD_ITEM_TO_CART,
            produtoToPush: {
                sku: "666",
                nome: "Teste",
                descricao: "Teste produto",
                preco: 100,
                imagem: "https://materializecss.com/images/sample-1.jpg"
            }
        });

        expect({
            codigo: '132',
            itens: [
                {
                    sku: '321',
                    nome: 'Teste',
                    descricao: 'Produto é assim, assim e assado',
                    preco: 10,
                    imagem: 'https://materializecss.com/images/sample-1.jpg'
                },
                {
                    sku: "666",
                    nome: "Teste",
                    descricao: "Teste produto",
                    preco: 100,
                    imagem: "https://materializecss.com/images/sample-1.jpg"
                }
            ],
            total: 10,
            itensCounter: 1
        }
        ).toEqual(initialState);
    });

    test('REMOVE_CART_ITEM test', () => {
        let initialState = {};

        initialState = cartReducer(undefined, {
            type: REMOVE_CART_ITEM,
            splice: "321"
        });

        expect({
            codigo: "132",
            itens: [],
            total: 10,
            itensCounter: 1
        }).toEqual(initialState);
    });

});