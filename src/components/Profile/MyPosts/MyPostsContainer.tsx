import React from 'react';
import {actions, getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../../redux/profileReducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {reset} from "redux-form";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        backgroundPosts: state.app.theme.section.backgroundSecondary,
        photo: state.profilePage.profile?.photos.large as string
    };
};


// const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost: actions.addPostActionCreator, reset}) (MyPosts);

const MyPostsContainer = compose<React.ComponentType>(
    connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost: actions.addPostActionCreator, reset}),
    withRouter,
) (MyPosts);


export default MyPostsContainer;