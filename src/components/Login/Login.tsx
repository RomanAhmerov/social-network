import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styles from "./../common/FormsControls/FormControls.module.css"
import {AppStateType} from "../../redux/reduxStore";

// Type (TS)
type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        // Redux-form прокидывает в props (handleSubmit)
        <form onSubmit={handleSubmit}>
            {/* Поля формы авторизации */}
            <div>
                <Field name="email" component={Input} type="text" placeholder="Email" validate={[required]}/>
            </div>

            <div>
                <Field name="password" component={Input} type="password" placeholder="Password" validate={[required]}/>
            </div>

            <div>
                <Field name="rememberMe" component={Input} type="checkbox"/> remember me
            </div>

            {/* Captcha */}
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl &&
            <div>
                <Field name="captcha" component={Input} placeholder="Symbols from image" validate={[required]} />
            </div>}


            {/* Валидационные ошибки */}
            {error && <div className={styles.formSummaryError}> {error} </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

// Обертка redux-from для нашей компоненты (LoginForm)
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    // a unique name for the form (уникальное имя для данной формы)
    form: 'login'
})(LoginForm);


// Type (TS)
type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

// export type LoginFormValuesTypeKeys = keyof LoginFormValuesType // получить ключи типа
// export type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string> // получить только те ключи, которые имеют тип string

// Основная компонента в которой будет находится наша форма (LoginReduxForm)
const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    // Функция для получения данных форм
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div>
            <h1>Login</h1>

            <p><b>Используйте следующие email и password:</b></p>
            <p><b>login:</b> free@samuraijs.com</p>
            <p><b>password:</b> free</p>

            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login})(Login);