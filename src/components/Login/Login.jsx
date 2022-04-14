import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { signIn } from "../../redux/auth-reducer";

let LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} 
          component={"input"} type={"text"}
        />
      </div>
      <div>
      <Field placeholder={"Password"} name={"password"} 
        component={"input"} type={"password"}
      />
      </div>
      <div>
        <label>
          <Field name={"rememberMe"}
            component={"input"} type={"checkbox"}
          /> Remember me
        </label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

let LoginReduxForm = reduxForm({form: "login"})(LoginForm);

let Login = (props) => {
  let onSubmit = formData => {
    console.log(formData);
    let {login, password, rememberMe} = formData;
    props.signIn(login, password, rememberMe);
  }

  if (props.isAuth) return <Redirect to="/profile" />

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {signIn})(Login);