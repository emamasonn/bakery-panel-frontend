import { TESTACTION } from '../types/types' 

const initialState = {}

export default function (state = initialState, action){
    switch(action.type){
        case TESTACTION:
            return state
        default:
            return state;
    }
}