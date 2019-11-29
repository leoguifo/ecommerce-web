import { homeReducer } from './homeReducer';
import { produtoReducer } from './produtoReducer';
import { cartReducer } from './cartReducer';
import { loginReducer } from './loginReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    homeState: homeReducer,
    produtoState: produtoReducer,
    cartState: cartReducer,
    loginState: loginReducer
});