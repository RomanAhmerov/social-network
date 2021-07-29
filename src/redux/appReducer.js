import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized: false
};

// Reducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default :
            return state;
    }
};


// Action Creator (AC)
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

// Thunks creators
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    // Возвращение всех промисов ответов
    Promise.all([promise]).then(() => {
        // Изменение в state (initialized: true)
        dispatch(initializedSuccess());
    })
};


export default appReducer;