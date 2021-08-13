import usersReducer, {actions, InitialStateType} from "./usersReducer";

// State
let state: InitialStateType

beforeEach(() => {
    // State
    state = {
        users: [
            {
                id: 0, name: 'User 0', followed: false,
                photos: {small: null, large: null }, status: 'status 0'
            },

            {
                id: 1, name: 'User 1', followed: false,
                photos: {small: null, large: null }, status: 'status 1'
            },

            {
                id: 2, name: 'User 2', followed: true,
                photos: {small: null, large: null }, status: 'status 2'
            },

            {
                id: 3, name: 'User 3', followed: true,
                photos: {small: null, large: null }, status: 'status 3'
            }
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    };
})


// Tests
test('follow success', () => {
    // Reducer / newState
    const newState = usersReducer(state, actions.followSuccess(1))

    // Expect
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();

})

test('unfollow success', () => {
    // Reducer / newState
    const newState = usersReducer(state, actions.unfollowSuccess(3))

    // Expect
    expect(newState.users[3].followed).toBeFalsy();
    expect(newState.users[2].followed).toBeTruthy();

})

