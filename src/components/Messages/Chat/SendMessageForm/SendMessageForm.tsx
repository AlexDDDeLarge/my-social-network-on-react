import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { minMessageBodyLength, required } from '../../../../utils/validators/validators';
import { TextArea } from '../../../FormControls/FormControls';
import { SendMessageFormDataType } from '../Chat';

let SendMessageForm: React.FC<InjectedFormProps<SendMessageFormDataType, any, string>> = props => {
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

export default reduxForm<SendMessageFormDataType, any>({form: "dialogAddMessageForm"})(SendMessageForm);