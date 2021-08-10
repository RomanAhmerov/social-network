import {updateObjectInArray} from "../utils/helpers/objectHelpers";

import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./reduxStore";
import {Action, Dispatch} from "redux";
import {usersAPI} from "../api/usersAPI";

// Не нужно т.к. TS в reducer подсказывает тип на основе AС
// const FOLLOW = 'SN/USERS/FOLLOW';
// const UNFOLLOW = 'SN/USERS/UNFOLLOW';
// const SET_USERS = 'SN/USERS/SET-USERS';
// const SET_CURRENT_PAGE = 'SN/USERS/SET-CURRENT-PAGE';
// const SET_TOTAL_USERS_COUNT = 'SN/USERS/SET-TOTAL-USERS-COUNT';
// const TOGGLE_IS_FETCHING = 'SN/USERS/TOGGLE-IS-FETCHING';
// const TOGGLE_IS_FOLLOWING_PROGRESS = 'SN/USERS/TOGGLE-IS-FOLLOWING-PROGRESS';


// Type (TS)
let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> // array of users id's
};

type InitialStateType = typeof initialState

// Reducer
const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };

        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };

        case 'SN/USERS/SET_USERS':
            return {...state, users: action.users};

        case 'SN/USERS/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage};

        case 'SN/USERS/SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.count};

        case 'SN/USERS/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching};

        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };

        default :
            return state;
    }
};

// Type (TS) (ActionsTypes)
type ActionsTypes = InferActionsTypes<typeof actions>


// Action creators
// Type (TS)
// AC
// Общий AC
export const actions = {
    followSuccess: (userId: number) => ({type: 'SN/USERS/FOLLOW', userId} as const),

    unfollowSuccess: (userId: number) => ({type: 'SN/USERS/UNFOLLOW', userId} as const),

    setUsers: (users: Array<UserType>) => ({type: 'SN/USERS/SET_USERS', users} as const),

    setCurrentPage: (currentPage: number) => ({
        type: 'SN/USERS/SET_CURRENT_PAGE',
        currentPage
    } as const),

    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'SN/USERS/SET_TOTAL_USERS_COUNT',
        count: totalUsersCount
    } as const),

    toggleIsFetching: (isFetching: boolean) => ({
        type: 'SN/USERS/TOGGLE_IS_FETCHING',
        isFetching
    } as const),

    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const)
}


// export const followSuccess = (userId: number) => ({type: FOLLOW, userId});
//
// export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId});
//
// export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users});
//
// export const setCurrentPage = (currentPage: number) => ({
//     type: SET_CURRENT_PAGE,
//     currentPage
// });
//
// export const setTotalUsersCount = (totalUsersCount: number) => ({
//     type: SET_TOTAL_USERS_COUNT,
//     count: totalUsersCount
// });
//
// export const toggleIsFetching = (isFetching: boolean) => ({
//     type: TOGGLE_IS_FETCHING,
//     isFetching
// });
//
// export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
//     type: TOGGLE_IS_FOLLOWING_PROGRESS,
//     isFetching,
//     userId
// });


// Thunk Creators
// Type (TS)
// Первый вариант типизации
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>

type ThunkType = BaseThunkType<ActionsTypes> // Второй вариант (рекомендасьон от Redux)

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    // Thunk
    return async (dispatch, getState) => {
        // getState - для примера (второй параметр thunk)
        // const a = getState().bla.bla; (ошибка, такого нет)

        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page))

        const data = await usersAPI.getUsers(page, pageSize);

        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    };
};


// (Функция для предотвращения дублирования (follow, unfollow))
const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number, apiMethod: any,
                                   actionCreator:
                                       (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId));

    const response = await apiMethod(userId);

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }

    dispatch(actions.toggleFollowingProgress(false, userId));
};


export const follow = (userId: number) => {
    // Thunk
    return (dispatch: DispatchType) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
    }
};

export const unfollow = (userId: number) => {
    // Thunk
    return (dispatch: DispatchType) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
    };
};


export default usersReducer;