import { TEST_VARS_PRODUCT } from '../types/productsTypes' 

const initialState = {}//Hay que cambiarlo dependiendo el estado inicial

export default function (state = initialState, action){
    switch(action.type){
        case TEST_VARS_PRODUCT:
            return state
        default:
            return state;
    }
}