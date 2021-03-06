import React from "react";
import styles from "./FormControls.module.css";
import c from "classnames";
import { Field } from "redux-form";

const FormControl = ({input, meta: {touched, error}, element, ...props}) => {
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

export const TextArea = props => (
  <FormControl {...props}  element={"textarea"} />
);

export const CustonInput = props => (
  <FormControl {...props} element={"input"} />
);

export const CreateField = (placeholder, name, component, type, validators, text = '', ...props) => (
  <div>
    <Field placeholder={placeholder} name={name} 
      component={component} type={type}
      validate={validators} {...props}
    /> {text}
  </div>
)

// export const TextArea = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
  
//   return (
//     <div className={c(styles.formСontrol, {[styles.error]: hasError})}>
//       <textarea {...input} {...props} ></textarea>
//       <div>
//         {hasError && <span>{meta.error}</span>}
//       </div>
//     </div>
//   )
// }

// export const CustonInput = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
  
//   return (
//     <div className={c(styles.formСontrol, {[styles.error]: hasError})}>
//       <input {...input} {...props} />
//       <div>
//         {hasError && <span className={styles.errorText}>{meta.error}</span>}
//       </div>
//     </div>
//   )
// }