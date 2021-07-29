import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form"; // Новая версия
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

// Создатель валидатора
const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
    let postsElements = [...props.posts]
        .reverse()
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    // Старая версия (*)
    // let newPostElement = React.createRef();
    //
    // let onAddPost = () => {
    //     props.addPost();
    // };
    //
    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text);
    // };


    // Новая версия
    let onAddPost = (formData) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            {/*    /!*Старая версия (*) *!/*/}
            {/*<div>*/}
            {/*    New post*/}
            {/*    <div>*/}
            {/*        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <button onClick={onAddPost}>Add post</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*Новая версия*/}
            <AddNewPostReduxForm onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

// Новая версия
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            New post
            <div>
                <Field component={Textarea} name="newPostText" validate={[required, maxLength10]} placeholder="Post message" />
            </div>

            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

// Новая версия
const AddNewPostReduxForm = reduxForm(
    {
        // a unique name for the form (уникальное имя для данной формы)
        form: 'profile'
    }
) (AddNewPostForm)

export default MyPosts;