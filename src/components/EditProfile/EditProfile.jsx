import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { setNewProfileInfo, setUser } from "../../redux/profilePageReducer";
import { CreateField, CustonInput, TextArea } from "../FormControls/FormControls";

let Form = ({handleSubmit, error, profile}) => {
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
        {CreateField(null, "lookingForAJob", CustonInput, "checkbox")}
      </div>
      <div>
        <b>My professional skills: </b>
        {CreateField(null, "lookingForAJobDescription", TextArea, "checkbox")}
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

let EditProfileReduxForm = reduxForm({form: "editProfile"})(Form);

let EditProfile = ({profile, authUserId, setUser, setNewProfileInfo}) => {
  useEffect(() => {
    if (profile === null) setUser(authUserId)
  }, [profile, authUserId])

  let onSubmit = formData => {
    setNewProfileInfo(formData)
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <EditProfileReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
    </div>
  )
}

let mapDispatchToProps = state => ({
  profile: state.profilePage.profile,
  authUserId: state.auth.userId
})

export default connect(mapDispatchToProps, {setUser, setNewProfileInfo})(EditProfile);