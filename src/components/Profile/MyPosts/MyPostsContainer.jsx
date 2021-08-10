import React from 'react';
import {actions} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText // Старая версия (*)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(actions.addPostActionCreator(newPostText))
        },

        // Старая версия (*)
        // updateNewPostText: (text) => {
        //     dispatch(updateNewPostTextActionCreator(text))
        // }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;