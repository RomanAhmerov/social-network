import React from "react";
import styles from "./FormControls.module.css"
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

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

            {hasError && <span>{error}</span>}
        </div>
    )
};

// Данные элементы являются обёртками стандартных элементов ввода для дальнейшего взаимодействия с ними
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
};

// Старая версия
// export const Textarea = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <div>
//                 <textarea {...input} {...props} />
//             </div>
//
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// };