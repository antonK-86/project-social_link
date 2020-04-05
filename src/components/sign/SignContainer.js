import React from "react";
import Sign from "./Sign";
import { connect } from "react-redux";
import { signInThunkC, signOutThunkC } from "../../redux/auth-reducer";

class SignContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <Sign {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { signInThunkC, signOutThunkC })(
  SignContainer
);
