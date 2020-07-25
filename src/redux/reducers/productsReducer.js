import { LOAD_LIST_PRODUCTS, EDIT_DATA_PRODUCT, EDIT_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from '../types/productsTypes' 

const initialState = {
    listProducts: [],
    editDataProduct: {},
}

export default function (state = initialState, action){
    switch(action.type){
        case LOAD_LIST_PRODUCTS:
            let listProducts = action.payload
            return {...state, listProducts: [...listProducts]}
        case EDIT_DATA_PRODUCT: 
            let editDataProduct = action.payload
            return {...state, editDataProduct: {...editDataProduct}}
        case EDIT_PRODUCT:
            let updateProduct = action.payload
            let updateProducts = state.listProducts((product) => {
                if(product._id === updateProduct._id){
                    return {...product, ...updateProduct}
                }
                return product
            })
            return {...state, listProducts: [...updateProducts]}
        case ADD_PRODUCT:
            let newProduct = action.payload
            return {...state, listProducts: [...state.listProducts, newProduct]}
        case DELETE_PRODUCT:
            let idProduct = action.payload
            return {...state, listProducts: state.listProducts.filter( (product) => product._id !== idProduct)}
        default:
            return state;
    }
}