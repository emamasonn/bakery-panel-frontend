import { LOAD_LIST_PRODUCTS, EDIT_DATA_PRODUCT, EDIT_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from '../types/productsTypes'


export const loadListProductsAction = (data) => {
    return {
        type: LOAD_LIST_PRODUCTS,
        payload: data
    }
}

export const editDataProductsAction = (data) => {
    return {
        type: EDIT_DATA_PRODUCT,
        payload: data
    }
}

export const editProductsAction = (data) => {
    return {
        type: EDIT_PRODUCT,
        payload: data
    }
}

export const addProductsAction = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}

export const deleteProductsAction = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}