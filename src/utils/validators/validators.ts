// Type (TS)
export type FieldValidatorType = (value: string) => string | undefined

// Validators
export const required: FieldValidatorType = (value) => {
    if (value) return undefined;

    return "Field is required";
}


export const maxLengthCreator = (maxLength: number): FieldValidatorType => (values) => {
    if (values && values.length > maxLength)  return `Max length is ${maxLength} symbols`;

    return  undefined;
}