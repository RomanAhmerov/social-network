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
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogType>,

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is are your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ] as Array<MessageType>
};

// Type (TS) (второй способ типизации)
export  type InitialStateType = typeof initialState

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
    sendMessageCreator: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND-MESSAGE', newMessageBody} as const)
}

export default  dialogsReducer;