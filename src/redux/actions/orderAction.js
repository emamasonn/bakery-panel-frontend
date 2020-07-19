import { LOAD_ALL_PRODUCTS, 
        LOAD_ORDERS, 
        NEW_ORDER, 
        DELETE_ORDER, 
        LOAD_EDIT_ORDER, 
        EDIT_ORDER, 
        LOAD_PRODUCTS_ORDER, 
        ADD_PRODUCT_ORDER, 
        SUBTRACT_PRODUCT_ORDER, 
        DELETE_PRODUCT_ORDER } from '../types/ordersTypes'

export const loadOrdersAction = (data) => {
    return {
        type: LOAD_ORDERS,
        payload: data,
    }
}

export const newOrderAction = (data) => {
    return {
        type: NEW_ORDER,
        payload: data,
    }
}

export const deleteOrderAction = (id) => {
    return {
        type: DELETE_ORDER,
        payload: id,
    }
}

export const loadEditOrderAction = (data) => {
    return {
        type: LOAD_EDIT_ORDER,
        payload: data,
    }
}

export const editOrderAction = (data) => {
    return {
        type: EDIT_ORDER,
        payload: data,
    }
}

export const loadProductsOrderAction = (data) => {
    console.log(data)
    return {
        type: LOAD_PRODUCTS_ORDER,
        payload: data,
    }
}

export const loadAllProductsAction = (data) => {
    console.log(data)
    return {
        type: LOAD_ALL_PRODUCTS,
        payload: data,
    }
}

export const addProductOrderAction = (data) => {
    return {
        type: ADD_PRODUCT_ORDER,
        payload: data,
    }
}

export const subtractProductOrderAction = (id) => {
    return {
        type: SUBTRACT_PRODUCT_ORDER,
        payload: id,
    }
}

export const deleteProductOrderAction = (id) => {
    return {
        type: DELETE_PRODUCT_ORDER,
        payload: id,
    }
}