import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';


const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);


interface MessageInterface {
    user: string;
    message: string;
    timestamp: number;
}


interface ChatStateInterface {
    messages: MessageInterface[]
}

const SEND_MESSAGE = "SEND_MESSAGE";
const DELETE_MESSAGE = 'DELETE_MESSAGE'


interface SendMessage {
    type: typeof SEND_MESSAGE,
    payload: MessageInterface
}

interface DeleteMessage {
    type: typeof DELETE_MESSAGE,
    meta: {
        timestamp: number
    }
}



type ChatActionTypes = SendMessage | DeleteMessage


function sendMesage(newMessage: MessageInterface): ChatActionTypes {
    return {
        type: SEND_MESSAGE,
        payload: newMessage
    }
}
function deleteMessage(timestamp: number): ChatActionTypes {
    return {
        type: DELETE_MESSAGE,
        meta: {
            timestamp
        }
    }
}


const initState: ChatStateInterface = {
    messages: []
};

const rootReducer = (state = initState, action: ChatActionTypes): ChatStateInterface => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                messages: [...state.messages, action.payload]
            }
        case DELETE_MESSAGE:
            return {
                messages: state.messages.filter(
                    message => message.timestamp !== action.meta.timestamp
                )
            }
        default:
            return state
    }
}



const store = createStore(rootReducer, initState, composedEnhancers)
export default store;
