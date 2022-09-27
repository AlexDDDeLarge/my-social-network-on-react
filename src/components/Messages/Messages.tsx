import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { Route } from "react-router";
import Chat from "./Chat/Chat";
import Dialog from "./Dialog/Dialog";
import style from "./Messages.module.css";
import { AppStateType } from "../../redux/reduxStore";
import { UserChatType } from "../../redux/messagesPageReducer";

type MapStatePropsType = {
  dialogs: Array<UserChatType>
}

type MapDispatchPropsType = {}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const Messages: React.FC<PropsType> = (props) => {
  return (
    <div className={style.Messages}>
      <div className={style.dialogs}>
        {props.dialogs.map(elem => (
          <Dialog
            path={elem.userId}
            firstName={elem.firstName}
            lastName={elem.lastName}
          />
        ))}
      </div>
      {props.dialogs.map((elem: UserChatType)=> (
        <Route exact path={`/messages/${elem.userId}`}>
          <Chat userId={elem.userId} messages={elem.messages}/>
        </Route>
      ))}
    </div>
  )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogs: state.messagesPage.dialogs
  }
};

export default compose<React.FC>(
  connect
  <MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
  (mapStateToProps),
  withAuthRedirect
)(Messages);
