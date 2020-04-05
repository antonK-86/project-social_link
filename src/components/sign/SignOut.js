import React from "react";
import { connect } from "react-redux";
import { signOutThunkC } from "../../redux/auth-reducer";

const SignOut = (props) => {
  return <div onClick={props.signOutThunkC}>Sign Out</div>;
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { signOutThunkC })(SignOut);
