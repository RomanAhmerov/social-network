import profileReducer, {actions} from "./profileReducer";
import {ProfileType} from "../types/types";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ],
    profile: null as ProfileType | null,
    status: ''
};


it('length of posts should be incremented',  () => {
    // 1. Test data
    let action = actions.addPostActionCreator("it-kamasutra.com");

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct',  () => {
    // 1. Test data
    let action = actions.addPostActionCreator("it-kamasutra.com");


    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

it('after deleting length of posts should`t be decrement if id is incorrect',  () => {
    // 1. Test data
    let action = actions.deletePost(1000);


    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(2);
});