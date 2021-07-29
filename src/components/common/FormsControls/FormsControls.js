import React from "react";
import styles from "./FormControls.module.css"

// Данная компонента нужна для того, чтобы избежать дублирование кода в обёртках (ниже)
const FormControl = ({input, meta: {touched, error}, children}) => {
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
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
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