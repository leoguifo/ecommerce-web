import { homeReducer } from '../src/reduxStore/reducers/homeReducer';
import {  } from '../src/reduxStore/actions/actionTypes';

describe('Home reducer tests', () => {

    test('homeReducer test', () => {
        let initialState = {};

        initialState = homeReducer(undefined, {
            type: 'TESTE',
            value: 1,
        });

        console.warn(initialState)

        expect({
            page: 1
        }).toEqual(initialState);
    });

});