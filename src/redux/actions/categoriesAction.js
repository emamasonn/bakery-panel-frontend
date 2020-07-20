import {LOAD_CATEGORIES, EDIT_CATEGORY, DELETE_CATEGORY, ADD_CATEGORY} from '../types/categoriesTypes'


export const loadCategories = (data) => {
    return {
        type: LOAD_CATEGORIES,
        payload: data,
    }
}

export const addCategoryAction = (data) => {
    return {
        type: ADD_CATEGORY,
        payload: data,
    }
}

export const deleteCategoryAction = (id) => {
    return {
        type: DELETE_CATEGORY,
        payload: id,
    }
}

export const editCategoryAction = (data) => {
    return {
        type: EDIT_CATEGORY,
        payload: data,
    }
}