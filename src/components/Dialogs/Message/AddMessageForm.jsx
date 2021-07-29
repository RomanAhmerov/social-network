import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

// Валидация по максимальному кол-ву элементов
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export default reduxForm({
    // a unique name for the form (уникальное имя для данной формы)
    form: 'dialogAddMessageForm'
}) (AddMessageForm);