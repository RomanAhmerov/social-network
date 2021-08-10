import {instance, ResultCodeForCaptchaEnum, ResultCodesEnum, APIResponseType} from "./api";

// Type (TS)
type MeResponseDataType = {
    id: number
    email: string
    login: string

}

type LoginResponseDataType = {
    userId: number
}


// API
export const authAPI = {
    // Header
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data);
    },

    // Логинизация и выход
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data);
    },

    logout() {
        return instance.delete(`auth/login`).then(res => res.data);
    }
};