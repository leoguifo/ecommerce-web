import { homeReducer } from './homeReducer';
import { produtoReducer } from './produtoReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    homeState: homeReducer,
    produtoState: produtoReducer
});