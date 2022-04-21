import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { signIn } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { CustonInput } from "../FormControls/FormControls";
import styles from "./Login.module.css"

let LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} 
          component={CustonInput} type={"text"}
          validate={[required]}
        />
      </div>
      <div>
      <Field placeholder={"Password"} name={"password"} 
        component={CustonInput} type={"password"}
        validate={[required]}
      />
      </div>
      <div>
        <label>
          <Field name={"rememberMe"}
            component={CustonInput} type={"checkbox"}
          /> Remember me
        </label>
      </div>
      { props.error && <p className={styles.formGeneralError}>
        {props.error}
      </p> }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

let LoginReduxForm = reduxForm({form: "login"})(LoginForm);

let Login = props => {
  let onSubmit = formData => {
    let {login, password, rememberMe} = formData;
    props.signIn(login, password, rememberMe);
  }

  if (props.isAuth) return <Redirect to="/profile" />
  // if (props.isAuth) window.history.back();

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {signIn})(Login);