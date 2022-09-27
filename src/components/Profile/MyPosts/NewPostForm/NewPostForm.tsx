import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { reduxForm } from 'redux-form';
import { maxPostBodyLength, minPostBodyLength, required } from '../../../../utils/validators/validators';
import { TextArea } from '../../../FormControls/FormControls';
import { NewPostFormDataType } from '../MyPosts';

type PropsType = {
  style: {
    form: string
    textArea: string
    submitButton: string
  }
}

let NewPostForm: React.FC<InjectedFormProps<NewPostFormDataType, PropsType> & PropsType> = props => {
  return (
    <form
      onSubmit={props.handleSubmit}
      className={props.style.form}
    >
      <Field
        name={"newPostBody"}
        placeholder={"Add a new post"}
        className={props.style.textArea}
        component={TextArea}
        validate={[required, maxPostBodyLength, minPostBodyLength]}
      />
      <div>
        <button className={props.style.submitButton}>Add a new post</button>
      </div>
    </form>
  )
}

export default reduxForm<NewPostFormDataType, PropsType>({form: "newPostForm"})(NewPostForm);