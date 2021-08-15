import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Button from "../../StyledComponents/Button";
import styled from "styled-components";

// Type (TS)
type PropsType = {}
type NewMessageFormValuesType = {newMessageBody: string}


// Валидация по максимальному кол-ву элементов
const maxLength50 = maxLengthCreator(50);

// FC
const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name="newMessageBody" placeholder="Enter your message"/>
            </div>

            <Button>Send</Button>
        </form>
    );
};


export default reduxForm<NewMessageFormValuesType>({
    // a unique name for the form (уникальное имя для данной формы)
    form: 'dialogAddMessageForm',
}) (AddMessageForm);

