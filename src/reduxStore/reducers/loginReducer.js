import update from 'immutability-helper';
import { ON_LOGIN, SET_LOGGED, SET_USER } from '../actions/actionTypes';

const initialState = {
    is_logged: false,
    loginError: "",
    user: {}
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_LOGIN:
            return update(state, {
                is_logged: {
                    $set: action.value
                },
                loginError: {
                    $set: action.error
                }
            });
        case SET_LOGGED:
            return update(state, {
                is_logged: {
                    $set: action.value
                }
            });
        case SET_USER:
            return update(state, {
                user: {
                    $set: action.value
                }
            });
        default:
            return state;
    }
};