import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

// Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };

        default :
            return state;
    }
};


// Action Creator (AC)
const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

// Thunks creators
export const getAuthUserData = () => async (dispatch) => {
    // Возвращение общего promise (me + then) для инициализации, код также выполняет свои действия*
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
    ;
};

// Логинизация и выход
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        // Dispatch thunk
        dispatch(getAuthUserData());
    } else {
        // Обработка серверной валидации с redux-form
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message})); // Dispatch action creator (AC) stopSubmit
    }

};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        // Dispatch thunk
        dispatch(setAuthUserData(null, null, null, false));
    };
};


export default authReducer;