import { TEST_VARS_MESSAGE } from '../types/messageTypes'


export const testAction = () => {
    return {
        type: TEST_VARS_MESSAGE,
        payload: 'TEST_VARS_MESSAGE'
    }
}