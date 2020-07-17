import { TEST_VARS_IMAGES } from '../types/imagesTypes' 

const initialState = {}//Hay que cambiarlo dependiendo el estado inicial

export default function (state = initialState, action){
    switch(action.type){
        case TEST_VARS_IMAGES:
            return state
        default:
            return state;
    }
}