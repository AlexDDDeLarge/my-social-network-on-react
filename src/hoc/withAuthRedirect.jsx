import React from "react";
import { Redirect } from "react-router-dom";

let withAuthRedirect = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      if (!this.props.isAuth) return <Redirect to="/login"/>;
      return <Component {...this.props}/>;
    }
  }
}

export default withAuthRedirect;