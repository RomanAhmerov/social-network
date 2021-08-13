import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import style from "./../../../common/FormsControls/FormControls.module.css";
import s from "./../ProfileInfo.module.css";
import {ProfileType} from "../../../../types/types";

// Type (TS)
type PropsType = {
    profile: ProfileType
}
type ProfileFormValuesType = {}

// FC
const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormValuesType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>

            {error && <div className={style.formSummaryError}>
                {error}
            </div> }

            <div>
                <b>Full name:</b> <Field placeholder="Full name" name="fullName" component={Input} />
            </div>

            <div>
                <b>Looking for a job:</b> <Field name="lookingForAJob" component={Input} type="checkbox" />
            </div>

            <div>
                <b>My professional skills:</b> <Field placeholder="My professional skills" name="lookingForAJobDescription" component={Textarea}  />
            </div>

            <div>
                <b>About me:</b> <Field placeholder="About me" name="aboutMe" component={Textarea}  />
            </div>

            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return (
                    <div key={key} className={s.contact}>
                        <b>{key}:</b> <Field placeholder={key} name={"contacts." + key} component={Input}/>
                    </div>
                )
            })}
            </div>
        </form>
    )
}

// HOC (reduxForm)
const ProfileDataReduxForm = reduxForm<ProfileFormValuesType, PropsType>({form: 'edit-profile'}) (ProfileDataForm);

export default ProfileDataReduxForm;