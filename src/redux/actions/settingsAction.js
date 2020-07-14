import { TEST_VARS_SETTING } from '../types/settingTypes'


export const testAction = () => {
    return {
        type: TEST_VARS_SETTING,
        payload: 'TEST_VARS_SETTING'
    }
}