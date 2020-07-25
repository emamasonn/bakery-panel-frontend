import {LOAD_ALL_PRODUCTS, 
        LOAD_ORDERS, 
        NEW_ORDER, 
        DELETE_ORDER, 
        LOAD_EDIT_ORDER, 
        EDIT_ORDER, 
        LOAD_PRODUCTS_ORDER, 
        ADD_PRODUCT_ORDER, 
        SUBTRACT_PRODUCT_ORDER, 
        DELETE_PRODUCT_ORDER } from '../types/ordersTypes'

const initialState = {
    orders: [],
    loadEditOrder: {},
    orderProducts: [],
    allProducts: [],
}

export default function (state = initialState, action){
    switch(action.type){
        case LOAD_ORDERS:
            let orders = action.payload
            return {...state, orders: [...orders]}
        case DELETE_ORDER:
            let idOrder = action.payload 
            return {...state, orders: state.orders.filter( (order) => order._id !== idOrder)}
        case LOAD_EDIT_ORDER:
            let loadEditOrder = action.payload
            return {...state, loadEditOrder: {...loadEditOrder}}
        case LOAD_PRODUCTS_ORDER:
            let productsOrder = action.payload
            return {...state, orderProducts: [...productsOrder]}
        case LOAD_ALL_PRODUCTS:
            let allProducts = action.payload
            return {...state, allProducts: [...allProducts]}
        case ADD_PRODUCT_ORDER:
            let updateProduct = []
            let product = action.payload
            let orderProducts = [...state.orderProducts]
            
            let isOrderProducts = orderProducts.some((isProd) => isProd._id === product._id)
            
            if(isOrderProducts){
                updateProduct = orderProducts.map((orderProd) => {
                    if(product._id === orderProd._id){
                        orderProd.quality += 1
                    }
                    return orderProd
                })
                return {...state, orderProducts: [...updateProduct]}
            }
            return {...state, orderProducts: [...state.orderProducts, product]}
        case SUBTRACT_PRODUCT_ORDER:
            let idSubtract = action.payload
            let orderSubtract = [...state.orderProducts]
            let subtractProduct = orderSubtract.map( (product) => {
                if(product._id === idSubtract && product.quality > 1 ){
                    return {...product, quality: product.quality - 1}
                }
                return product
            })
            return {...state, orderProducts: [ ...subtractProduct]}
        case DELETE_PRODUCT_ORDER: 
            let id = action.payload 
            return {...state, orderProducts: state.orderProducts.filter( (product) => product._id !== id)}
        default:
            return state;
    }
}