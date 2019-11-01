import update from 'immutability-helper';

const initialState = {
};

export const homeReducer = (state = initialState, action) => {
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