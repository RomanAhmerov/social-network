import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
// import {usersAPI} from "../api/usersAPI";
import {profileAPI} from "../api/profileAPI";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";


// const ADD_POST = 'SN/PROFILE/ADD-POST';
// // const UPDATE_NEW_POST_TEXT = 'SN/PROFILE/UPDATE-NEW-POST-TEXT'; // Старая версия (*)
// const SET_USER_PROFILE = 'SN/PROFILE/SET-USER-PROFILE';
// const SET_STATUS = 'SN/PROFILE/SET-STATUS';
// const DELETE_POST = 'SN/PROFILE/DELETE-POST';
// const SAVE_PHOTO_SUCCESS = 'SN/PROFILE/SAVE-PHOTO-SUCCESS';

// Type (TS)
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    // newPostText: ''   // (*) Старая версия
};

export type InitialStateType = typeof initialState

// Reducer
const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD-POST': {
            let newPost = {
                id: 5,
                // message: state.newPostText, // Старая версия (*)
                message: action.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                // newPostText: '' // Старая версия (*)
            };
        }

        // Старая версия
        // case UPDATE_NEW_POST_TEXT: {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     };
        // };

        case 'SN/PROFILE/SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }

        case 'SN/PROFILE/SET-STATUS': {
            return {...state, status: action.status}
        }

        case 'SN/PROFILE/DELETE-POST': {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }

        case 'SN/PROFILE/SAVE-PHOTO-SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }

        default :
            return state;
    }
};

// Action creators
export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'SN/PROFILE/ADD-POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET-USER-PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET-STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'SN/PROFILE/DELETE-POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE-PHOTO-SUCCESS', photos} as const)
}
// export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text}); // Старая версия (*)

// Type (TS) Action Type
type ActionsType = InferActionsTypes<typeof actions>


// Thunk creators
// Type (TS) Thunk
type ThunkType = BaseThunkType<ActionsType | FormAction>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);

    dispatch(actions.setUserProfile(data));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    try {
        const data = await profileAPI.getStatus(userId);

        dispatch(actions.setStatus(data));
    } catch (error) {
        // Перехват ошибки
    }

};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    };
};

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);

    if(data.resultCode === 0 ) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    };
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;

    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0 ) {
        if (userId !== null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error("userId can't be null")
        }

    } else {
        dispatch(stopSubmit('edit-profile', {"contacts": {"facebook": data.messages[0]}}));
        return Promise.reject(data.messages[0]);
    }
};

export default profileReducer;