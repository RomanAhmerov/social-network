// DAL (Data Access Layer)
import * as axios from "axios";

// Шаблон для API
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "797821ca-5e62-4458-9aa9-8c6476b8b275"
    }
});


export const usersAPI = {
    // Users
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    follow (userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },

    // Profile (переделегирование) (backward responsibility)
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    },
};


export const profileAPI = {
    // Profile
    getProfile(userId) {
        return instance.get(`profile/${userId}`);

    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);

    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});

    },
};


export const authAPI = {
    // Header
    me() {
        return instance.get(`auth/me`);
    },

        // Логинизация и выход
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },

    logout() {
        return instance.delete(`auth/login`);
    }
};

