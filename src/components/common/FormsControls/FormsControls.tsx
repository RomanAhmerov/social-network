import React from "react";
import styles from "./FormControls.module.css"
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import styled, {css} from "styled-components";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";

// Данная компонента нужна для того, чтобы избежать дублирование кода в обёртках (ниже)
// Type (TS)
type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    // children: React.ReactNode // Эта типизация происходит автоматически (её не нужно делать)
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>

            {hasError && <StyledMessageErrorWrapper>{error}</StyledMessageErrorWrapper>}
        </div>
    )
};

// Style
const StyledMessageErrorWrapper = styled.div`
  margin-top: 5px;
  padding-left: 5px;
  color: rgba(244, 67, 54, 0.7);
`

// FormItems
// Textarea
// Данные элементы являются обёртками стандартных элементов ввода для дальнейшего взаимодействия с ними
const TextareaItem: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <StyledTextarea {...input} {...restProps} />
            {/*<textarea {...input} {...restProps} />*/}
        </FormControl>
    )
};

// Input
const InputItem: React.FC<mapStateToProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <StyledInput {...input} {...restProps} background={props.background} />
            {/*<input {...input} {...restProps} />*/}
        </FormControl>
    )
};

// CheckBox
export const Checkbox: React.FC<mapStateToProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
};

// Type (TS)
type mapStateToProps = {
    background?: string
} & WrappedFieldProps

const mapStateToProps = (state: AppStateType) => {
    return {
        background: state.app.theme.button.backgroundActive
    }
}

export const Input = connect(mapStateToProps, {}) (InputItem)
export const Textarea = connect(mapStateToProps, {}) (TextareaItem)


// Style
// Input
type StyledFormItemTextType = {
    background?: string
    fullWidth?: boolean
}

const StyledInput = styled.input<StyledFormItemTextType>`
  padding: 10px 10px;
  border-radius: 15px;
  border-width: 0;
  width: 100%;
  outline: none;
  
  background-color: ${props => props.background};
  
  &:focus {
    box-shadow: 0 0 10px 2px #3672f4;
  }
  
  &::placeholder {
    //color: white;
  }
`

const StyledTextarea = styled.textarea<StyledFormItemTextType>`
  padding: 10px 10px;
  min-height: 50px;
  border-radius: 15px;
  border-width: 0;
  width: 100%;
  outline: none;
  resize: vertical;
  
  background-color: ${props => props.background};
  
  &:focus {
    box-shadow: 0 0 10px 2px #3672f4;
  }
  
  &::placeholder {
    //color: white;
`