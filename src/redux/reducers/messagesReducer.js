import { LOAD_MESSAGES, DELETE_MESSAGE } from '../types/messageTypes' 

const initialState = {
    messages: []
}

export default function (state = initialState, action){
    switch(action.type){
        case LOAD_MESSAGES:
            let messages = action.payload
            return {...state, messages: [...messages]}
        case DELETE_MESSAGE:
            let id = action.payload
            return {...state, messages: state.messages.filter((message) => message._id != id)}
        default:
            return state;
    }
}