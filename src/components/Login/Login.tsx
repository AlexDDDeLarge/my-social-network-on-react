import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, SubmitHandler } from "redux-form";
import { reduxForm } from "redux-form";
import { signIn } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/reduxStore";
import { required } from "../../utils/validators/validators";
import { CreateField, CustonInput } from "../FormControls/FormControls";
import styles from "./Login.module.css"

type OwnFormProps = {
  capchaUrl: string | null
}

let LoginForm: React.FC<InjectedFormProps<FormDataType, OwnFormProps, string> & OwnFormProps> = ({handleSubmit, error, capchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreateField("Login", "login", CustonInput, "text", [required])}
      {CreateField("Password", "password", CustonInput, "password", [required])}
      <label>
          {CreateField("", "rememberMe", CustonInput, "checkbox", null, "Remember me")} 
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

let LoginReduxForm = reduxForm<FormDataType, OwnFormProps>({form: "login"})(LoginForm);

type MapStatePropsType = {
  isAuth: boolean
  capchaUrl: string | null
}

type MapDispatchPropsType = {
  signIn: (
    login: string, 
    password: string, 
    rememberMe: boolean, 
    capcha: string
    ) => void
}

type OwnPropsType = {}

type LoginPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

type FormDataType = {
  login: string, password: string, rememberMe: boolean, capcha: string
}

let Login: React.FC<LoginPropsType> = props => {
  let onSubmit = (formData: FormDataType) => {
    let {login, password, rememberMe, capcha} = formData;
    props.signIn(login, password, rememberMe, capcha);
  }

  if (props.isAuth) return <Redirect to="/profile" />

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} capchaUrl={props.capchaUrl} />
    </div>
  )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  capchaUrl: state.auth.capchaUrl
});

export default connect
  <MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
  (mapStateToProps, {signIn})(Login);