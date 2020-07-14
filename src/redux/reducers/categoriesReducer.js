import { TEST_VARS_CATEGORIES } from '../types/categoriesTypes' 

const initialState = {}//Hay que cambiarlo dependiendo el estado inicial

export default function (state = initialState, action){
    switch(action.type){
        case TEST_VARS_CATEGORIES:
            return state
        default:
            return state;
    }
}