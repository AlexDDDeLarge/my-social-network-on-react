import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { InjectedFormProps, reduxForm } from "redux-form";
import { setNewProfileInfo, setUser } from "../../redux/profilePageReducer";
import { AppStateType } from "../../redux/reduxStore";
import { ProfileType } from "../../types/types";
import { CreateField, CustonInput, TextArea } from "../FormControls/FormControls";

type FormDataType = ProfileType

type FormOwnPropsType = {
  profile: ProfileType | null
}

let Form: React.FC<InjectedFormProps<FormDataType, any, string> & FormOwnPropsType> = ({handleSubmit, error, profile}) => {
  return profile && (
    <form onSubmit={handleSubmit}>
      <div>
        <b>Full Name: </b>
        {CreateField("Full Name", "fullName", CustonInput, "text")}
      </div>
      <div>
        <b>About Me: </b>
        {CreateField("About me", "aboutMe", CustonInput, "text")}
      </div>
      <div>
        <b>Looking for a job: </b>
        {CreateField("", "lookingForAJob", CustonInput, "checkbox")}
      </div>
      <div>
        <b>My professional skills: </b>
        {CreateField("", "lookingForAJobDescription", TextArea, "checkbox")}
      </div>
      <div>
        <h3>Contacts: </h3>
        {Object.keys(profile.contacts).map(key =>(
          <div key={key}>
            <b>{key}: </b>
            {CreateField(key, `contacts.${key}`, CustonInput, "text")}
          </div>
        ))}
      </div>
      {error && <p>
        {error}
      </p>}
      <button>Save</button>
    </form>
  )
}

let EditProfileReduxForm = reduxForm<FormDataType, FormOwnPropsType>({form: "editProfile"})(Form);

type MapStatePropsType = {
  profile: ProfileType
  authUserId: number
}

type MapDispatchPropsType = {
  setUser: (userId: number) => void
  setNewProfileInfo: (profile: ProfileType) => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

let EditProfile: React.FC<PropsType> = ({profile, authUserId, setUser, setNewProfileInfo}) => {
  useEffect(() => {
    if (profile === null) setUser(authUserId)
  }, [profile, authUserId])

  let onSubmit = (formData: FormDataType) => {
    setNewProfileInfo(formData)
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <EditProfileReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
    </div>
  )
}

let mapDispatchToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile as ProfileType,
  authUserId: state.auth.userId as number
})

export default connect
  <MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
  (mapDispatchToProps, {setUser, setNewProfileInfo})(EditProfile);