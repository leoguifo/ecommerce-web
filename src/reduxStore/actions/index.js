import { TESTE } from './actionTypes';

export const teste = value => {
    return ({
        type: TESTE,
        page: value
    })
};