import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageReduxForm from "./Message/AddMessageForm";
import {InitialStateType} from "../../redux/dialogsReducer";
import {FormAction} from "redux-form";

// Type (TS)
type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
    reset: (form: string) => FormAction
}

// FC
const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);

    // Функция для onSubmit (redux-form)
    let addNewMessage = (values: {newMessageBody: string}) => {
        props.sendMessage(values.newMessageBody);
        props.reset('dialogAddMessageForm')
    };


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