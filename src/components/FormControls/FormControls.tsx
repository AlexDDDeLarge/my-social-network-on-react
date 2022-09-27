import React from "react";
import styles from "./FormControls.module.css";
import c from "classnames";
import { Field, GenericFieldHTMLAttributes } from "redux-form";
import { FieldValidatorType } from "../../utils/validators/validators";



type FormControlPropsType = {
  input: {
    name: string
    onBlur: (event: any) => void
    onChange: (event: any) => void
    onDragStart: (event: any) => void
    onDrop: (event: any) => void
    onFocus: (event: any) => void
    value: string
  }
  meta: {
    touched?: boolean
    error?: string | undefined
  }
  element: "input" | "textarea"
  children?: React.ReactNode
  props: Array<GenericFieldHTMLAttributes>
}



const FormControl: React.FC<FormControlPropsType> = ({input, meta: {touched, error}, element, children, ...props}) => {
  const hasError = touched && error;
  return (
    <div className={c(styles.formСontrol, {[styles.error]: hasError})}>
      { React.createElement(element, {...input, ...props}) }
      <div>
        {hasError && <span>{error}</span>}
      </div>
    </div>
  )
}

type InputPropsType = {
  input: {
    name: string
    onBlur: (event: any) => void
    onChange: (event: any) => void
    onDragStart: (event: any) => void
    onDrop: (event: any) => void
    onFocus: (event: any) => void
    value: string
  }
  meta: {
    touched?: boolean
    error?: string | undefined
  }
  props: any
}

export const TextArea: React.FC<InputPropsType> = (props) => (
  <FormControl {...props} element={"textarea"} />
);

export const CustonInput: React.FC<InputPropsType> = (props) => (
  <FormControl {...props} element={"input"} />
);

type ValidatorsType = Array<FieldValidatorType> | FieldValidatorType | null

export const CreateField = (
  placeholder: string, 
  name: string, 
  component: React.FC<InputPropsType>, 
  type: string, 
  validators?: ValidatorsType, 
  text = "", 
  ...props: any[]
  ) => (  
    <div>
      <Field placeholder={placeholder} name={name} 
        component={component} type={type}
        validate={validators} {...props}
      /> {text}
    </div>
  )