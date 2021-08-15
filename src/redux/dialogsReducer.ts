import {InferActionsTypes} from "./reduxStore";

// const SEND_MESSAGE = 'SN/DIALOGS/SEND-MESSAGE';

// Type (TS)
type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

//
let initialState = {
    dialogs: [
        {id: 1, name: 'Kate'},
        // {id: 2, name: 'Viktor'},
        // {id: 3, name: 'Alex'},
        // {id: 4, name: 'Timur'}
    ] as Array<DialogType>,

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is are your?'}
    ] as Array<MessageType>
};

// Type (TS) (второй способ типизации)
export type InitialStateType = typeof initialState

// Reducer
const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND-MESSAGE':
            let body = action.newMessageBody;

            return  {...state, messages: [...state.messages, {id: 12, message: body}]};

        default:
            return state;
    }
};

// Type (TS)
type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    sendMessage: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND-MESSAGE', newMessageBody} as const)
}

export default  dialogsReducer;