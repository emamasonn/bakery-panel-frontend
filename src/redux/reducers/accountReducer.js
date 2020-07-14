import { TEST_VARS_ACCOUNT } from '../types/accountTypes' 

const initialState = {}//Hay que cambiarlo dependiendo el estado inicial

export default function (state = initialState, action){
    switch(action.type){
        case TEST_VARS_ACCOUNT:
            return state
        default:
            return state;
    }
}