import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7ZHHUdN_3p6I5EAb0khNR1ESNmRw_z-vLgs-qma5nH4xSxAGC38uSZ9rldLMUTmGkfw&usqp=CAU" alt="ava" />
            
            {props.message}
            
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;