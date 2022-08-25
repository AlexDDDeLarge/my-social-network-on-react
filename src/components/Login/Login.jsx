import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { signIn } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { CreateField, CustonInput } from "../FormControls/FormControls";
import styles from "./Login.module.css"

let LoginForm = ({handleSubmit, error, capchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreateField("Login", "login", CustonInput, "text", [required])}
      {CreateField("Password", "password", CustonInput, "password", [required])}
      <label>
          {CreateField(null, "rememberMe", CustonInput, "checkbox", null, "Remember me")} 
      </label>
      { error && <p className={styles.formGeneralError}>
        {error}
      </p> }
      <div>
        {capchaUrl && <img src={capchaUrl} alt="capcha" />}
        {capchaUrl && CreateField("Symbols from image", "capcha", CustonInput, "text", [required])}
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

let LoginReduxForm = reduxForm({form: "login"})(LoginForm);

let Login = props => {
  let onSubmit = formData => {
    let {login, password, rememberMe, capcha} = formData;
    props.signIn(login, password, rememberMe, capcha);
  }

  if (props.isAuth) return <Redirect to="/profile" />
  // if (props.isAuth) window.history.back();

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} capchaUrl={props.capchaUrl} />
    </div>
  )
}

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  capchaUrl: state.auth.capchaUrl
});

export default connect(mapStateToProps, {signIn})(Login);