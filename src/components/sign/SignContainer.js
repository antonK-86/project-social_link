import React from "react";
import Sign from "./Sign";
import { connect } from "react-redux";
import {
  signInThunkC,
  signOutThunkC,
  getCaptchaAction,
} from "../../redux/auth-reducer";

class SignContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <Sign {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha,
});

export default connect(mapStateToProps, {
  signInThunkC,
  signOutThunkC,
  getCaptchaAction,
})(SignContainer);
