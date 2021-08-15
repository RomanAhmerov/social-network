import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, FormAction, InjectedFormProps, reduxForm} from "redux-form"; // Новая версия
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {PostType} from "../../../types/types";
import Button from "../../StyledComponents/Button";
import styled from "styled-components";
import Container from "../../StyledComponents/Container";
import {RouteComponentProps} from "react-router-dom";

// Создатель валидатора
const maxLength10 = maxLengthCreator(10);

// Type (TS)
export type MapPropsType = {
    posts: Array<PostType>
    photo?: string
    backgroundPosts?: string
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
    reset: (form: string) => FormAction
}

type PathParamsType = {
    userId: string
}

// FC
const MyPosts: React.FC<MapPropsType & RouteComponentProps<PathParamsType> & DispatchPropsType> = React.memo(props => {
    let postsElements = [...props.posts]
        .reverse()
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} photo={props.photo} backgroundPosts={props.backgroundPosts} />);


    let onAddPost = (formData: AddPostFormValuesType) => {
        props.addPost(formData.newPostText);
        props.reset('profile')
    };

    return (
        <Container>
            <StyledProfilePostTitle>{!props.match.params.userId ? 'My posts' : 'Posts'}</StyledProfilePostTitle>

            {!props.match.params.userId && <AddNewPostReduxForm onSubmit={onAddPost}/>}

            <StyledPostsWrapper >
                {postsElements}
            </StyledPostsWrapper>
        </Container>
    );
});


// Форма для добавления постов
// Type (TS)
type PropsFormType = {}
type AddPostFormValuesType = {
    newPostText: string
}

// FC
const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsFormType> & PropsFormType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" validate={[required]} placeholder="Enter post text..." />
            </div>

            <div>
                <Button margin='0 0 10px 0'>Add post</Button>
            </div>
        </form>
    )
};


// Обертка формы от ReduxForm
const AddNewPostReduxForm = reduxForm<AddPostFormValuesType, PropsFormType>(
    {
        // a unique name for the form (уникальное имя для данной формы)
        form: 'profile'
    }
) (AddNewPostForm)

export default MyPosts;

// Style
const StyledProfilePostTitle = styled.h4`
  margin-top: 35px;
  margin-bottom: 5px;
  max-width: 200px;
  
  font-size: 20px;
  box-shadow: 0 1px 0 0 #3672f4;
  
`



const StyledPostsWrapper = styled.div` 
    margin-top: 20px;
`