import React from 'react';
import {actions} from "../../../redux/profileReducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {reset} from "redux-form";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    };
};


const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost: actions.addPostActionCreator, reset}) (MyPosts);


export default MyPostsContainer;