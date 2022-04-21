import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { maxPostBodyLength, minPostBodyLength, required } from '../../../../utils/validators/validators';
import { TextArea } from '../../../FormControls/FormControls';

let NewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"newPostBody"}
        placeholder={"Text of your post"}
        className={props.style.textArea}
        component={TextArea}
        validate={[required, maxPostBodyLength, minPostBodyLength]}
      />
      <div>
        <button>Add a new post</button>
      </div>
    </form>
  )
}

export default reduxForm({form: "newPostForm"})(NewPostForm);