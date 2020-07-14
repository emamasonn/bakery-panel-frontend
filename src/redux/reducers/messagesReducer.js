import { TEST_VARS_MESSAGE } from '../types/messageTypes' 

const initialState = {}//Hay que cambiarlo dependiendo el estado inicial

export default function (state = initialState, action){
    switch(action.type){
        case TEST_VARS_MESSAGE:
            return state
        default:
            return state;
    }
}