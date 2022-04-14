import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

let SendMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={"newMessageBody"} placeholder={"Enter message text"} component={"textarea"} />
      <button>Send</button>
    </form> 
  )
}

export default reduxForm({form: "dialogAddMessageForm"})(SendMessageForm);