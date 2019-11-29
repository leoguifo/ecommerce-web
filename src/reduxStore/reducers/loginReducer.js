import update from 'immutability-helper';
import { ON_LOGIN } from '../actions/actionTypes';

const initialState = {
    is_logged: false
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_LOGIN:
            return update(state, {
                is_logged: {
                    $set: action.value
                }
            });
        default:
            return state;
    }
};