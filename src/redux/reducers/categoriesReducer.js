import { LOAD_CATEGORIES,  ADD_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY  } from '../types/categoriesTypes' 

const initialState = {
    categories: [],
}

 const categoriesReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOAD_CATEGORIES: 
            let categories = action.payload
            return {...state, categories: [...state.categories, ...categories]}
        case ADD_CATEGORY:
            
            return state
        case DELETE_CATEGORY:
            let id = action.payload 
            return {...state, categories: state.categories.filter((category) => category._id !== id)}
        case EDIT_CATEGORY:

              return state 
        default:
            return state;
    }
}
export default categoriesReducer;