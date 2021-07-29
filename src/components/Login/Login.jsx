import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styles from "./../common/FormsControls/FormControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
        // Redux-form прокидывает в props (handleSubmit)
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="email" component={Input} type="text" placeholder="Email" validate={[required]} />
            </div>

            <div>
                <Field name="password" component={Input} type="password" placeholder="Password" validate={[required]} />
            </div>

            <div>
                <Field name="rememberMe" component={Input} type="checkbox" /> remember me
            </div>

            {error && <div className={styles.formSummaryError}> {error} </div> }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

// Обертка redux-from для нашей компоненты (LoginForm)
const LoginReduxForm = reduxForm({
    // a unique name for the form (уникальное имя для данной формы)
    form: 'login'
})(LoginForm);

// Основная компонента в которой будет находится наша форма (LoginReduxForm)
const Login = (props) => {
    // Функция для получения данных форм
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login}) (Login);