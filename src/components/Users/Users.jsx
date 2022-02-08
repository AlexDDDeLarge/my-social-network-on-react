import React from "react";

const Users = props => {
  return (
    <div>
      
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage
  }
}

const mapStateToProps = (dispatch) => {
  return {
    
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;