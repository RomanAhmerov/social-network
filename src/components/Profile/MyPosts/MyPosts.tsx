import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, FormAction, InjectedFormProps, reduxForm} from "redux-form"; // Новая версия
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {PostType} from "../../../types/types";

// Создатель валидатора
const maxLength10 = maxLengthCreator(10);

// Type (TS)
export type MapPropsType = {
    posts: Array<PostType>
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
    reset: (form: string) => FormAction
}

// FC
const MyPosts: React.FC<MapPropsType & DispatchPropsType> = React.memo(props => {
    let postsElements = [...props.posts]
        .reverse()
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);


    let onAddPost = (formData: AddPostFormValuesType) => {
        props.addPost(formData.newPostText);
        props.reset('profile')
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <AddNewPostReduxForm onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
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
            New post
            <div>
                <Field component={Textarea} name="newPostText" validate={[required]} placeholder="Post message" />
            </div>

            <div>
                <button>Add post</button>
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