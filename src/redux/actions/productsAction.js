import { TEST_VARS_PRODUCT } from '../types/productsTypes'


export const testAction = () => {
    return {
        type: TEST_VARS_PRODUCT,
        payload: 'TEST_VARS_PRODUCT'
    }
}