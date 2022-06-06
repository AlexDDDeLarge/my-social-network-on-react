import React from 'react';
import { reduxForm } from 'redux-form';
import { CreateField, CustonInput } from '../../FormControls/FormControls';

const Form = ({handleSubmit, error}) => {
  return <form onSubmit={handleSubmit}>
    {CreateField('Enter name of user', 'userName', CustonInput, 'text')}
    <button>Find user</button>
  </form>
}

const UserSearchForm = reduxForm({form: 'userSearchForm'})(Form);

const UserSearch = ({requestSearchUser, count, page}) => {
  let onSubmit = formData => {
    requestSearchUser(formData.userName, count, page)
  }
  
  return <div>
    <UserSearchForm onSubmit={onSubmit}/>
  </div>
}

export default UserSearch;