import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { minMessageBodyLength, required } from '../../../../utils/validators/validators';
import { TextArea } from '../../../FormControls/FormControls';

let SendMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
        name={"newMessageBody"} 
        placeholder={"Enter message text"} 
        component={TextArea}
        validate={[required, minMessageBodyLength]} 
      />
      <button>Send</button>
    </form> 
  )
}

export default reduxForm({form: "dialogAddMessageForm"})(SendMessageForm);