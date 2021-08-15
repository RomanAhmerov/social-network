import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Checkbox, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styles from "./../common/FormsControls/FormControls.module.css"
import {AppStateType} from "../../redux/reduxStore";
import TitleSection from "../StyledComponents/TitleSection";
import styled from "styled-components";
import Container from "../StyledComponents/Container";
import Flex from "../StyledComponents/Flex";
import Li from "../StyledComponents/Li";
import Button from "../StyledComponents/Button";

// Type (TS)
type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        // Redux-form прокидывает в props (handleSubmit)
        <form onSubmit={handleSubmit}>
            {/* Поля формы авторизации */}
            <ul>
                <Li>
                    <Field name="email" component={Input} type="text" placeholder="Email" validate={[required]}/>
                </Li>

                <Li>
                    <Field name="password" component={Input} type="password" placeholder="Password" validate={[required]}/>
                </Li>

                <Li>
                    <label>
                        <Flex align='center' padding='0 5px' height='10px' margin='0 0 35px 0'>
                            <Field name="rememberMe" component={Checkbox} type="checkbox"/>
                            <StyledRememberWrapper>remember me</StyledRememberWrapper>
                        </Flex>
                    </label>
                </Li>

                {/* Captcha */}
                {captchaUrl && <Flex margin='20px 0' justify='center'><StyledCaptcha src={captchaUrl} alt="captcha"/></Flex>}
                {captchaUrl &&
                <Li>
                    <Field name="captcha" component={Input} placeholder="Symbols from image" validate={[required]} />
                </Li>}


                {/* Валидационные ошибки */}
                {error && <div className={styles.formSummaryError}> {error} </div>}

                <Li>
                    <Button>Login</Button>
                </Li>
            </ul>
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

    // Style
    background?: string
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
        <StyledLoginWrapper background={props.background}>
            <Container padding='10px 30px'>
                {/*????*/}
                <Flex justify='center'>
                    <div>
                        <TitleSection title='Login' />

                        {/* Это блок с временной информацией, на вёрстку не обращать внимание */}
                        <StyledAdditionalInfoWrapper>
                            <h3>Используйте следующие Email и Password:</h3>

                            <ul>
                                <Li margin='10px 0 5px 0'><b>Email: </b> free@samuraijs.com</Li>
                                <Li><b>Password: </b> free</Li>
                            </ul>
                        </StyledAdditionalInfoWrapper>


                        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
                    </div>

                </Flex>

            </Container>
        </StyledLoginWrapper>
    )
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,

    // Style
    background: state.app.theme.section.background
});

export default connect(mapStateToProps, {login})(Login);

// Style
// Login
type StyledLoginWrapperType = {
    background?: string
}

const StyledLoginWrapper = styled.div<StyledLoginWrapperType>`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: ${props => props.background};
`

// Captcha
const StyledCaptcha = styled.img`
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0 0 10px 1px #3672f4;
`

// Remember (checkbox)
const StyledRememberWrapper = styled.div`
  padding-left: 15px;
`

// Additional Information
const StyledAdditionalInfoWrapper = styled.div`
  margin: 20px 0 30px 0;
  padding: 10px 15px;
  border-radius: 20px 8px 20px 8px;
  box-shadow: 0 0 10px 1px #3672f4;
`

