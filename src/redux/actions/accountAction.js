import { TEST_VARS_ACCOUNT } from '../types/accountTypes'


export const testAction = () => {
    return {
        type: TEST_VARS_ACCOUNT,
        payload: 'TEST_VARS_ACCOUNT'
    }
}