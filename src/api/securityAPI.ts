import {instance} from "./api";

// Type (TS)
type GetCaptchaUrlResponseType = {
    url: string
}

// API
export const securityAPI = {
    // Captcha
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`).then(res => res.data);
    }

};