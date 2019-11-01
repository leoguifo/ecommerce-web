import update from 'immutability-helper';

const initialState = {
    produtos: [{
        sku: "321",
        nome: "Teste",
        descricao: "Produto é assim, assim e assado",
        preco: "10",
        imagem: "https://materializecss.com/images/sample-1.jpg"
    },]
};

export const produtoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TESTE":
            return update(state, {
                page: {
                    $set: action.value
                }
            });
    }

    return state;
};