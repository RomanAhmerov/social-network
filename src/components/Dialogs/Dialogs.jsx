import React from "react";
import {Redirect} from "react-router-dom"
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageReduxForm from "./Message/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);


    // Функция для onSubmit (redux-form)
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    // Redirect
    if (!props.isAuth) return <Redirect to="/login" />
    //
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>

                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;