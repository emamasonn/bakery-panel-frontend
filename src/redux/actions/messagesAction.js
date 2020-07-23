import { LOAD_MESSAGES, DELETE_MESSAGE } from '../types/messageTypes'


export const loadMessagesAction = (data) => {
    return {
        type: LOAD_MESSAGES,
        payload: data
    }
}

export const deleteMessageAction = (id) => {
    return {
        type: DELETE_MESSAGE,
        payload: id
    }
}