import {getAuthUserData} from "./authReducer";
import {InferActionsTypes} from "./reduxStore";

// const INITIALIZED_SUCCESS = 'SN/APP/INITIALIZED-SUCCESS';

// Type (TS)
// Initial State App
let initialState = {
    initialized: false
};

export type InitialStateType = typeof initialState

// Reducer
const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            };

        default :
            return state;
    }
};

// Type (TS)
type ActionsType = InferActionsTypes<typeof actions>

// Action Creator (AC)
export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED-SUCCESS'} as const),

}

// Thunks creators
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    // Возвращение всех промисов ответов
    Promise.all([promise]).then(() => {
        // Изменение в state (initialized: true)
        dispatch(actions.initializedSuccess());
    })
};


export default appReducer;