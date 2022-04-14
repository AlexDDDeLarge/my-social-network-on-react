import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { Route } from "react-router";
import Chat from "./Chat/Chat";
import Dialog from "./Dialog/Dialog";
import style from "./Messages.module.css";

const Messages = (props) => {
  
  return (
    <div className={style.Messages}>
      <div className={style.dialogs}>
        {props.messagesPage.dialogs.map(elem => (
          <Dialog
            path={elem.userId}
            firstName={elem.firstName}
            lastName={elem.lastName}
          />
        ))}
      </div>
      {props.messagesPage.dialogs.map(elem => (
        <Route exact path={`/messages/${elem.userId}`}>
          <Chat user={elem}/>
        </Route>
      ))}
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
};

export default compose(
  connect(mapStateToProps, null),
  withAuthRedirect
)(Messages);
