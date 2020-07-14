import { TEST_VARS_SETTING } from '../types/settingTypes' 

const initialState = {}//Hay que cambiarlo dependiendo el estado inicial

export default function (state = initialState, action){
    switch(action.type){
        case TEST_VARS_SETTING:
            return state
        default:
            return state;
    }
}