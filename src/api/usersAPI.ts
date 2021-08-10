import {instance, GetItemsType, APIResponseType} from "./api";

export const usersAPI = {
    // Users
    getUsers(currentPage = 1, pageSize: number) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            });
    },

    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },

    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>
    }

    // // Profile (переделегирование) (backward responsibility)
    // getProfile(userId: number) {
    //     console.warn('Obsolete method. Please use profileAPI object')
    //     return profileAPI.getProfile(userId);
    // }
};