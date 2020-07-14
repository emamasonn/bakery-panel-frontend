import { TEST_VARS_ORDER } from '../types/ordersTypes' 

const initialState = {}//Hay que cambiarlo dependiendo el estado inicial

export default function (state = initialState, action){
    switch(action.type){
        case TEST_VARS_ORDER:
            return state
        default:
            return state;
    }
}