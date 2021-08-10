import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../api/authAPI";
import {securityAPI} from "../api/securityAPI";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";

// const SET_USER_DATA = 'SN/AUTH/SET-USER-DATA';
// const GET_CAPTCHA_URL_SUCCESS = 'SN/AUTH/GET-CAPTCHA-URL-SUCCESS';


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null // Если null, тогда captcha не обязательна
};

// Type (TS)
export type InitialStateType = typeof initialState

// Reducer
const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/AUTH/SET-USER-DATA":
        case 'SN/AUTH/GET-CAPTCHA-URL-SUCCESS':
            return {
                ...state,
                ...action.payload
            };

        default :
            return state;
    }
};


// Action Creator (AC)
// Type (TS) AC
type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SN/AUTH/SET-USER-DATA',
        payload: {userId, email, login, isAuth}
    } as const),

    getCaptchaUrlSuccess: (captchaUrl: null | string) => ({
        type: 'SN/AUTH/GET-CAPTCHA-URL-SUCCESS',
        payload: {captchaUrl}
    } as const)
}


// Thunks creators
// Type (TS) Thunk
type ThunkType = BaseThunkType<ActionsType | FormAction>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    // Возвращение общего promise (me + then) для инициализации, код также выполняет свои действия*
    let meData = await authAPI.me();

    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
};

// Логинизация, captcha и выход
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);

    if (loginData.resultCode === ResultCodesEnum.Success) {
        // Dispatch thunk
        dispatch(getAuthUserData());
    } else {
        if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }

        // Обработка серверной валидации с redux-form
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message})); // Dispatch action creator (AC) stopSubmit
    }

};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();

    const captchaUrl = data.url;

    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch) => {
    let logoutData = await authAPI.logout();

    if (logoutData.resultCode === ResultCodesEnum.Success) {
        // Dispatch thunk
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
};


export default authReducer;